const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})

const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicToggle.textContent = "Play Music";
    } else {
        music.play();
        musicToggle.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
});



