const footer = document.getElementById('btn');

footer.addEventListener('click', () => {
    if (footer.classList.contains('animate-spin')) {
        footer.classList.remove('animate-spin');
    } else {
        footer.classList.add('animate-spin');
    }
});

const music = document.getElementById('music');
const audio = document.getElementById('audio');
let isPlaying = false;

music.addEventListener('click', () => {
    if (isPlaying) {
        music.classList.remove('dj-animation');
        audio.pause();
        audio.currentTime = 1; 
        isPlaying = false;
    } else {
        music.classList.add('dj-animation');
        audio.play();
        isPlaying = true;
    }
});