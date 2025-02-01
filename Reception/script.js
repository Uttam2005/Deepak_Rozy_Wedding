// script.js

let images = [
    'DSC_6911.JPG',
    'DSC_6912.JPG',
    'DSC_6913.JPG',
    'DSC_6918.JPG',
    'DSC_6923.JPG',
    'DSC_6924.JPG',
    'DSC_6927.JPG',
    'DSC_6929.JPG',
    'DSC_6930.JPG',
    'DSC_6935.JPG',
    'DSC_6936.JPG',
    'DSC_6937.JPG',
    'DSC_6938.JPG',
    'DSC_6939.JPG',
    'DSC_6940.JPG',
    'DSC_6941.JPG',
    'DSC_6942.JPG',
    'DSC_6951.JPG',
    'DSC_6952.JPG',
    'DSC_6953.JPG',
    'DSC_6954.JPG',
    'DSC_6955.JPG',
    'DSC_6957.JPG',
    'DSC_6958.JPG',
    'DSC_6959.JPG',
    'DSC_6960.JPG',
    'DSC_6961.JPG',
    'DSC_6962.JPG',
    'DSC_6963.JPG',
    'DSC_6965.JPG',
    'DSC_6966.JPG',
    'DSC_6967.JPG',
    'DSC_6968.JPG',
    'DSC_6969.JPG',
    'DSC_6970.JPG',
    'DSC_6971.JPG',
    'DSC_6972.JPG',
    'DSC_6973.JPG',
    'DSC_6975.JPG',
    'DSC_6976.JPG',
    'DSC_6977.JPG',
    'DSC_6978.JPG',
    'DSC_6979.JPG',
    'DSC_6980.JPG',
    'DSC_6982.JPG',
    'DSC_6983.JPG',
    'DSC_6984.JPG',
    'DSC_6985.JPG',
    'DSC_6986.JPG',
    'DSC_6987.JPG',
    'DSC_6988.JPG',
    'DSC_6989.JPG',
    'DSC_6990.JPG',
    'DSC_6991.JPG',
    'DSC_6992.JPG',
    'DSC_6993.JPG',
    'DSC_6994.JPG',
    'DSC_6995.JPG',
    'DSC_6997.JPG',
    'DSC_6998.JPG',
    'DSC_6999.JPG',
    'DSC_7000.JPG',
    'DSC_7002.JPG',
    'DSC_7003.JPG',
    'DSC_7004.JPG',
    'DSC_7005.JPG',
    'DSC_7006.JPG',
    'DSC_7007.JPG',
    'DSC_7008.JPG',
    'DSC_7009.JPG',
    'DSC_7010.JPG',
    'DSC_7011.JPG',
    'DSC_7012.JPG',
    'DSC_7013.JPG',
    'DSC_7014.JPG',
    'DSC_7015.JPG',
    'DSC_7016.JPG',
    'DSC_7017.JPG',
    'DSC_7018.JPG',
    'DSC_7019.JPG',
    'DSC_7020.JPG',
    'DSC_7021.JPG',
    'DSC_7022.JPG',
    'DSC_7023.JPG',
    'DSC_7024.JPG',
    'DSC_7025.JPG',
    'DSC_7026.JPG',
    'DSC_7027.JPG',
    'DSC_7029.JPG',
    'DSC_7030.JPG',
    'DSC_7032.JPG',
    'DSC_7033.JPG',
    'DSC_7034.JPG',
    'DSC_7036.JPG',
    'DSC_7037.JPG',
    'DSC_7038.JPG',
    'DSC_7039.JPG',
    'DSC_7040.JPG',
    'DSC_7041.JPG',
    'DSC_7042.JPG',
    'DSC_7043.JPG',
    'DSC_7044.JPG',
    'DSC_7045.JPG',
    'DSC_7046.JPG',
    'DSC_7047.JPG',
    'DSC_7048.JPG',
    'DSC_7049.JPG',
    'DSC_7050.JPG',
    'DSC_7051.JPG',
    'DSC_7052.JPG',
    'DSC_7054.JPG',
    'DSC_7055.JPG',
    'DSC_7056.JPG',
    'DSC_7057.JPG',
    'DSC_7058.JPG',
    'DSC_7059.JPG',
    'DSC_7060.JPG',
    'DSC_7061.JPG',
    'DSC_7062.JPG',
    'DSC_7063.JPG',
    'DSC_7064.JPG',
    'DSC_7065.JPG',
    'DSC_7066.JPG',
    'DSC_7067.JPG',
    'DSC_7069.JPG',
    'DSC_7070.JPG',
    'DSC_7071.JPG',
    'DSC_7072.JPG',
    'DSC_7073.JPG',
    'DSC_7074.JPG',
    'DSC_7075.JPG',
    'DSC_7076.JPG',
    'DSC_7077.JPG',
    'DSC_7078.JPG',
    'DSC_7079.JPG',
    'DSC_7080.JPG',
    'DSC_7081.JPG',
    'DSC_7082.JPG',
    'DSC_7083.JPG',
    'DSC_7084.JPG',
    'DSC_7085.JPG',
    'DSC_7086.JPG',
    'DSC_7087.JPG',
    'DSC_7088.JPG',
    'DSC_7089.JPG',
    'DSC_7090.JPG',
    'DSC_7091.JPG',
    'DSC_7092.JPG',
    'DSC_7093.JPG',
    'DSC_7094.JPG',
    'DSC_7095.JPG',
    'DSC_7096.JPG',
    'DSC_7097.JPG',
    'DSC_7098.JPG',
    'DSC_7099.JPG',
    'DSC_7100.JPG',
    'DSC_7101.JPG',
    'DSC_7102.JPG',
    'DSC_7103.JPG',
    'DSC_7104.JPG',
    'DSC_7105.JPG',
    'DSC_7106.JPG',
    'DSC_7107.JPG',
    'DSC_7108.JPG',
    'DSC_7109.JPG',
    'DSC_7110.JPG',
    'DSC_7111.JPG',
    'DSC_7112.JPG',
    'DSC_7113.JPG',
    'DSC_7114.JPG',
    'DSC_7115.JPG',
    'DSC_7116.JPG',
    'DSC_7117.JPG',
    'DSC_7118.JPG',
    'DSC_7119.JPG',
    'DSC_7120.JPG',
    'DSC_7121.JPG',
    'DSC_7122.JPG',
    'DSC_7123.JPG',
    'DSC_7124.JPG',
    'DSC_7125.JPG',
    'DSC_7126.JPG',
    'DSC_7127.JPG',
    'DSC_7128.JPG',
    'DSC_7129.JPG',
    'DSC_7130.JPG',
    'DSC_7131.JPG',
    'DSC_7132.JPG',
    'DSC_7133.JPG',
    'DSC_7134.JPG',
    'DSC_7136.JPG',
    'DSC_7137.JPG',
    'DSC_7138.JPG',
    'DSC_7140.JPG',
    'DSC_7141.JPG',
    'DSC_7142.JPG',
    'DSC_7143.JPG',
    'DSC_7144.JPG',
    'DSC_7145.JPG',
    'DSC_7146.JPG',
    'DSC_7147.JPG',
    'DSC_7148.JPG',
    'DSC_7149.JPG',
    'DSC_7150.JPG',
    'DSC_7151.JPG',
    'DSC_7152.JPG',
    'DSC_7153.JPG',
    'DSC_7154.JPG',
    'DSC_7155.JPG',
    'DSC_7156.JPG',
    'DSC_7157.JPG',
    'DSC_7158.JPG',
    'DSC_7159.JPG',
    'DSC_7160.JPG',
    'DSC_7161.JPG',
    'DSC_7162.JPG',
    'DSC_7163.JPG',
    'DSC_7164.JPG',
    'DSC_7165.JPG',
    'DSC_7166.JPG',
    'DSC_7167.JPG',
    'DSC_7168.JPG',
    'DSC_7169.JPG',
    'DSC_7170.JPG',
    'DSC_7171.JPG',
    'DSC_7172.JPG',
    'DSC_7173.JPG',
    'DSC_7174.JPG',
    'DSC_7175.JPG',
    'DSC_7176.JPG',
    'DSC_7177.JPG',
    'DSC_7178.JPG',
    'DSC_7179.JPG',
    'DSC_7180.JPG',
    'DSC_7181.JPG',
    'DSC_7182.JPG',
    'DSC_7183.JPG',
    'DSC_7184.JPG',
    'DSC_7185.JPG',
    'DSC_7186.JPG',
    'DSC_7187.JPG',
    'DSC_7188.JPG',
    'DSC_7189.JPG',
    'DSC_7190.JPG',
    'DSC_7191.JPG',
    'DSC_7192.JPG',
    'DSC_7193.JPG',
    'DSC_7194.JPG',
    'DSC_7195.JPG',
    'DSC_7196.JPG',
    'DSC_7197.JPG',
    'DSC_7198.JPG',
    'DSC_7199.JPG',
    'DSC_7200.JPG',
    'DSC_7204.JPG',
    'DSC_7205.JPG',
    'DSC_7206.JPG',
    'DSC_7207.JPG',
    'DSC_7208.JPG',
    'DSC_7211.JPG',
    'DSC_7212.JPG',
    'DSC_7213.JPG',
    'DSC_7214.JPG',
    'DSC_7215.JPG',
    'DSC_7216.JPG',
    'DSC_7217.JPG',
    'DSC_7218.JPG',
    'DSC_7219.JPG',
    'DSC_7220.JPG',
    'DSC_7221.JPG',
    'DSC_7222.JPG',
    'DSC_7223.JPG',
    'DSC_7224.JPG',
    'DSC_7225.JPG',
    'DSC_7228.JPG',
    'DSC_7229.JPG',
    'DSC_7230.JPG',
    'DSC_7231.JPG',
    'DSC_7232.JPG',
    'DSC_7233.JPG',
    'DSC_7234.JPG',
    'DSC_7235.JPG',
    'DSC_7236.JPG',
    'DSC_7237.JPG',
    'DSC_7238.JPG',
    'DSC_7239.JPG',
    'DSC_7240.JPG',
    'DSC_7241.JPG',
    'DSC_7242.JPG',
    'DSC_7243.JPG',
    'DSC_7244.JPG',
    'DSC_7245.JPG',
    'DSC_7247.JPG',
    'DSC_7248.JPG',
    'DSC_7249.JPG',
    'DSC_7250.JPG',
    'DSC_7251.JPG',
    'DSC_7252.JPG',
    'DSC_7253.JPG',
    'DSC_7254.JPG',
    'DSC_7255.JPG',
    'DSC_7256.JPG',
    'DSC_7257.JPG',
    'DSC_7258.JPG',
    'DSC_7259.JPG',
    'DSC_7260.JPG',
    'DSC_7261.JPG',
    'DSC_7262.JPG',
    'DSC_7263.JPG',
    'DSC_7264.JPG',
    'DSC_7265.JPG',
    'DSC_7266.JPG',
    'DSC_7267.JPG',
    'DSC_7268.JPG',
    'DSC_7269.JPG',
    'DSC_7270.JPG',
    'DSC_7271.JPG',
    'DSC_7272.JPG',
    'DSC_7273.JPG',
    'DSC_7274.JPG',
    'DSC_7275.JPG',
    'DSC_7276.JPG',
    'DSC_7277.JPG',
    'DSC_7278.JPG',
    'DSC_7279.JPG',
    'DSC_7280.JPG',
    'DSC_7281.JPG',
    'DSC_7282.JPG',
    'DSC_7283.JPG',
    'DSC_7284.JPG',
    'DSC_7285.JPG',
    'DSC_7286.JPG',
    'DSC_7287.JPG',
    'DSC_7288.JPG',
    'DSC_7289.JPG',
    'DSC_7290.JPG',
    'DSC_7291.JPG',
    'DSC_7292.JPG',
    'DSC_7293.JPG',
    'DSC_7294.JPG',
    'DSC_7295.JPG',
    'DSC_7296.JPG',
    'DSC_7297.JPG',
    'DSC_7298.JPG',
    'DSC_7299.JPG',
    'DSC_7300.JPG',
    'DSC_7301.JPG',
    'DSC_7302.JPG',
    'DSC_7303.JPG',
    'DSC_7304.JPG',
    'DSC_7305.JPG',
    'DSC_7306.JPG',
    'DSC_7307.JPG',
    'DSC_7308.JPG',
    'DSC_7309.JPG',
    'DSC_7312.JPG',
    'DSC_7315.JPG',
    'DSC_7316.JPG'
];

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