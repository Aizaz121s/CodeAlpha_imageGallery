// script.js

const currentImage = document.getElementById('current-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = thumbnails.length - 1;
    }
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= thumbnails.length) {
        currentIndex = 0;
    }
    updateImage();
});

function updateImage() {
    currentImage.src = thumbnails[currentIndex].src;
}