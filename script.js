let data = [
    { name: 'first', scr: "1.mp3",name:'first' ,title: 'music that gave me yahyo' },
    { name: 'second', scr: "2.mp3",name:'second' ,title: 'music that gave me yahyo' }
];

let index = 0;
let isPlaying = false;

let next = () => {
    index = (index + 1) % data.length;
    loadMusic(data[index]);
};

let prev = () => {
    index = (index - 1 + data.length) % data.length;
    loadMusic(data[index]);
};

let loadMusic = (music) => {
    let title = document.querySelector('.title');
    let name = document.querySelector('.name');
    let audio = document.querySelector('#audio');
    title.innerText = music.title;
    name.innerText = music.name;
    audio.src = music.scr;
    audio.play();
    isPlaying = true;
};

let togglePlay = () => {
    let audio = document.querySelector('#audio');
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
};

window.onload = () => {
    loadMusic(data[index]);
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');
    let playBtn = document.querySelector('.play');
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    playBtn.addEventListener('click', togglePlay);
};
