// script.js

let images = [ 'DKD00582.JPG', 'DKD00583.JPG', 'DKD00584.JPG', 'DKD00585.JPG', 'DKD00586.JPG', 'DKD00587.JPG', 'DKD00588.JPG', 'DKD00589.JPG', 'DKD00590.JPG', 'DKD00591.JPG', 'DKD00592.JPG', 'DKD00593.JPG', 'DKD00594.JPG', 'DKD00595.JPG', 'DKD00596.JPG', 'DKD00597.JPG', 'DKD00598.JPG', 'DKD00599.JPG', 'DKD00600.JPG', 'DKD00601.JPG', 'DKD00602.JPG', 'DKD00603.JPG', 'DKD00604.JPG', 'DKD00605.JPG', 'DKD00606.JPG', 'DKD00607.JPG', 'DKD00608.JPG', 'DKD00609.JPG', 'DKD00610.JPG', 'DKD00610.JPG', 'DKD00611.JPG', 'DKD00612.JPG', 'DKD00613.JPG', 'DKD00614.JPG', 'DKD00615.JPG', 'DKD00616.JPG', 'DKD00617.JPG', 'DKD00618.JPG', 'DKD00619.JPG', 'DKD00620.JPG', 'DKD00621.JPG', 'DKD00622.JPG', 'DKD00623.JPG', 'DKD00624.JPG', 'DKD00625.JPG', 'DKD00626.JPG', 'DKD00627.JPG', 'DKD00628.JPG', 'DKD00629.JPG', 'DKD00630.JPG', 'DKD00631.JPG', 'DKD00632.JPG', 'DKD00633.JPG', 'DKD00634.JPG', 'DKD00635.JPG', 'DKD00636.JPG', 'DKD00637.JPG', 'DKD00638.JPG', 'DKD00639.JPG', 'DKD00640.JPG', 'DKD00641.JPG', 'DKD00642.JPG', 'DKD00644.JPG', 'DKD00645.JPG', 'DKD00646.JPG', 'DKD00647.JPG', 'DKD00648.JPG', 'DKD00649.JPG', 'DKD00650.JPG', 'DKD00651.JPG', 'DKD00652.JPG', 'DKD00653.JPG' ];

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