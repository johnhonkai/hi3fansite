document.addEventListener('DOMContentLoaded', function() {
  const events = document.querySelectorAll('.event');

  events.forEach(event => {
      // Set the background image for the ::after pseudo-element
      const imageUrl = event.dataset.image;
      if (imageUrl) {
          event.style.setProperty('--event-image-url', `url(${imageUrl})`);
      }

      event.addEventListener('click', function() {
          // Remove any existing event-details divs
          const existingDetails = document.querySelectorAll('.event-details');
          existingDetails.forEach(detail => detail.remove());

          // Create a new div for event details
          const eventDetails = document.createElement('div');
          eventDetails.classList.add('event-details');

          // Set the content based on data attribute
          eventDetails.innerHTML = `
              <p>${this.dataset.detail}</p>
              <span class="close-btn" onclick="this.parentElement.style.display='none'">&times;</span>
          `;

          // Append the event details div to the .schedule-content
          const scheduleContent = document.querySelector('.schedule-content');
          scheduleContent.appendChild(eventDetails);

          // Show the div
          eventDetails.style.display = 'block';
      });
  });
});
