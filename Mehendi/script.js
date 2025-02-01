// script.js

let images = ['DSC_9468.JPG', 'DSC_9469.JPG', 'DSC_9470.JPG', 'DSC_9472.JPG', 'DSC_9473.JPG', 'DSC_9474.JPG', 'DSC_9475.JPG', 'DSC_9476.JPG', 'DSC_9480.JPG', 'DSC_9481.JPG', 'DSC_9482.JPG', 'DSC_9483.JPG', 'DSC_9484.JPG', 'DSC_9485.JPG', 'DSC_9488.JPG', 'DSC_9489.JPG', 'DSC_9490.JPG', 'DSC_9491.JPG', 'DSC_9492.JPG', 'DSC_9493.JPG', 'DSC_9494.JPG', 'DSC_9495.JPG', 'DSC_9496.JPG', 'DSC_9497.JPG', 'DSC_9498.JPG', 'DSC_9499.JPG', 'DSC_9500.JPG', 'DSC_9502.JPG', 'DSC_9503.JPG', 'DSC_9504.JPG', 'DSC_9505.JPG', 'DSC_9506.JPG', 'DSC_9507.JPG', 'DSC_9508.JPG', 'DSC_9509.JPG', 'DSC_9510.JPG', 'DSC_9511.JPG', 'DSC_9512.JPG', 'DSC_9513.JPG', 'DSC_9514.JPG', 'DSC_9515.JPG', 'DSC_9516.JPG', 'DSC_9517.JPG', 'DSC_9518.JPG', 'DSC_9519.JPG', 'DSC_9520.JPG', 'DSC_9521.JPG', 'DSC_9522.JPG', 'DSC_9523.JPG', 'DSC_9524.JPG', 'DSC_9525.JPG', 'DSC_9526.JPG', 'DSC_9527.JPG', 'DSC_9528.JPG', 'DSC_9529.JPG', 'DSC_9530.JPG', 'DSC_9531.JPG', 'DSC_9532.JPG', 'DSC_9533.JPG', 'DSC_9534.JPG', 'DSC_9535.JPG', 'DSC_9536.JPG', 'DSC_9537.JPG', 'DSC_9538.JPG', 'DSC_9539.JPG', 'DSC_9540.JPG', 'DSC_9541.JPG', 'DSC_9542.JPG', 'DSC_9544.JPG', 'DSC_9545.JPG', 'DSC_9546.JPG'];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const downloadButton = document.getElementById('download-button');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const fullscreenButton = document.getElementById('fullscreen-button');

// Load initial image
galleryImage.src = images[currentIndex];

// Download button click event
downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = galleryImage.src;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Previous button click event
previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
});

// Next button click event
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});

// Fullscreen button click event
fullscreenButton.addEventListener('click', () => {
    const fullscreenMode = document.createElement('div');
    fullscreenMode.classList.add('fullscreen-mode');
    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = galleryImage.src;
    fullscreenMode.appendChild(fullscreenImage);

    const fullscreenButtonsContainer = document.createElement('div');
    fullscreenButtonsContainer.classList.add('fullscreen-buttons-container');

    const downloadFullscreenButton = document.createElement('button');
    downloadFullscreenButton.classList.add('fullscreen-button');
    downloadFullscreenButton.innerText = 'Download';
    downloadFullscreenButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = fullscreenImage.src;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    const previousFullscreenButton = document.createElement('button');
    previousFullscreenButton.classList.add('fullscreen-button');
    previousFullscreenButton.innerText = 'Previous';
    previousFullscreenButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        fullscreenImage.src = images[currentIndex];
    });

    const nextFullscreenButton = document.createElement('button');
    nextFullscreenButton.classList.add('fullscreen-button');
    nextFullscreenButton.innerText = 'Next';
    nextFullscreenButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        fullscreenImage.src = images[currentIndex];
    });

    const closeFullscreenButton = document.createElement('button');
    closeFullscreenButton.classList.add('fullscreen-button');
    closeFullscreenButton.innerText = 'Close';
    closeFullscreenButton.addEventListener('click', () => {
        document.body.removeChild(fullscreenMode);
    });

    fullscreenButtonsContainer.appendChild(downloadFullscreenButton);
    fullscreenButtonsContainer.appendChild(previousFullscreenButton);
    fullscreenButtonsContainer.appendChild(nextFullscreenButton);
    fullscreenButtonsContainer.appendChild(closeFullscreenButton);
    fullscreenMode.appendChild(fullscreenButtonsContainer);
    document.body.appendChild(fullscreenMode);
});