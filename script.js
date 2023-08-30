
const audioSource = document.getElementById('audioSource');
const radioPlayer = document.getElementById('radioPlayer');
const prevChannelButton = document.getElementById('prevChannel');
const nextChannelButton = document.getElementById('nextChannel');
const channelCounter = document.getElementById('channelCounter');
const volumeSlider = document.getElementById('volumeSlider');

const channels = [
    '182.mp3',
    'reflexion.mp4',
    '184.ogg',
    'gossip.mp3',
    '186.ogg'
];
let currentChannelIndex = 0;
let currentChannelTime = 0;

function changeChannel(index) {
    audioSource.src = channels[index];
    radioPlayer.load();
    radioPlayer.currentTime = currentChannelTime;
    radioPlayer.play();
    updateChannelCounter();
}

function updateChannelCounter() {
    channelCounter.textContent = `frecuencia ${currentChannelIndex + 182}`;
}

prevChannelButton.addEventListener('click', () => {
    currentChannelTime = radioPlayer.currentTime;
    if (currentChannelIndex > 0) {
        currentChannelIndex--;
    } else {
        currentChannelIndex = channels.length - 1;
    }
    changeChannel(currentChannelIndex);
});

nextChannelButton.addEventListener('click', () => {
    currentChannelTime = radioPlayer.currentTime;
    currentChannelIndex = (currentChannelIndex +  1) % channels.length;
    changeChannel(currentChannelIndex);
});

volumeSlider.addEventListener('input', () => {
    radioPlayer.volume = volumeSlider.value;
});

// Inicializar el primer canal
changeChannel(currentChannelIndex);


