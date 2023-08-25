// script.js
const audioSource = document.getElementById('audioSource');
const radioPlayer = document.getElementById('radioPlayer');
const prevChannelButton = document.getElementById('prevChannel');
const nextChannelButton = document.getElementById('nextChannel');
const channelCounter = document.getElementById('channelCounter');
const volumeSlider = document.getElementById('volumeSlider');

const channels = [
    'Breezeblocks.mp3',
    'channel2.mp3',
    'channel3.mp3',
    'channel4.mp3',
    'channel5.mp3'
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
    channelCounter.textContent = `Canal ${currentChannelIndex + 1}`;
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
    currentChannelIndex = (currentChannelIndex + 1) % channels.length;
    changeChannel(currentChannelIndex);
});

volumeSlider.addEventListener('input', () => {
    radioPlayer.volume = volumeSlider.value;
});

// Inicializar el primer canal
changeChannel(currentChannelIndex);
