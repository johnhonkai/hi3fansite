const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    // Close other open accordions
    toggles.forEach(item => {
      if (item !== toggle) {
        item.classList.remove('active');
        item.nextElementSibling.style.maxHeight = null;
      }
    });
    
    // Toggle the clicked accordion
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

///carousel
const carousels = {
  1: ['assets/guide/arlead1.png', 'assets/guide/arlead2.png', 'assets/guide/arlead3.png'], // Images for Carousel 1
  2: ['image4.jpg', 'image5.jpg', 'image6.jpg'], // Images for Carousel 2
};

let carouselIndices = {
  1: 0, // Current index for Carousel 1
  2: 0, // Current index for Carousel 2
};

function showImage(carouselId, index) {
  const carouselImage = document.getElementById(`carousel-image-${carouselId}`);
  carouselImage.src = carousels[carouselId][index];
}

function nextImage(carouselId) {
  carouselIndices[carouselId] = (carouselIndices[carouselId] + 1) % carousels[carouselId].length;
  showImage(carouselId, carouselIndices[carouselId]);
}

function prevImage(carouselId) {
  carouselIndices[carouselId] = (carouselIndices[carouselId] - 1 + carousels[carouselId].length) % carousels[carouselId].length;
  showImage(carouselId, carouselIndices[carouselId]);
}
