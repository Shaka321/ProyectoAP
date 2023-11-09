let currentImage = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
  images[currentImage].style.display = 'none';
  images[index].style.display = 'block';
  currentImage = index;
}

setInterval(() => {
  let nextImage = (currentImage + 1) % images.length;
  showImage(nextImage);
}, 1000);

showImage(currentImage);
