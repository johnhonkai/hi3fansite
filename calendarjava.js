document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
        // Set the background image for the ::after pseudo-element
        const imageUrl = event.dataset.image;
        if (imageUrl) {
            event.style.setProperty('--event-image-url', `url(${imageUrl})`);
        }

        event.addEventListener('click', function() {
            // Identify the correct container (schedule-content or events-content)
            const isScheduleEvent = this.closest('.schedule-content');
            const isEventContent = this.closest('.events-content');

            let targetDetailsContainer;

            if (isScheduleEvent) {
                // Target schedule-details container
                targetDetailsContainer = document.getElementById('schedule-details');
            } else if (isEventContent) {
                // Target event-details container
                targetDetailsContainer = document.getElementById('event-details');
            }

            // Clear any previous details in the target container
            targetDetailsContainer.innerHTML = '';

            // Create a new div for event details
            const eventDetails = document.createElement('div');
            eventDetails.classList.add('event-details');

            // Set the content based on data attribute
            eventDetails.innerHTML = `
                <p>${this.dataset.detail}</p>
                <span class="close-btn" onclick="this.parentElement.style.display='none'">&times;</span>
            `;

            // Append the details to the correct container
            targetDetailsContainer.appendChild(eventDetails);

            // Center the event-details in the target container
            eventDetails.style.display = 'block';
        });
    });
});
