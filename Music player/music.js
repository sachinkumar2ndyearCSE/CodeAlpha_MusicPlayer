const audio = document.getElementById('audio');

document.getElementById('play').addEventListener('click', () => {
    audio.play();
});

document.getElementById('pause').addEventListener('click', () => {
    audio.pause();
});

document.getElementById('stop').addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});
