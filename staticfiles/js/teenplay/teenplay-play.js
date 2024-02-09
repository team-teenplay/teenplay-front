const pauseIcons = document.querySelectorAll(".pause");
const playIcons = document.querySelectorAll(".restart");
const videos = document.querySelectorAll(".play-video");
const videoInfos = document.querySelectorAll(".play-info-wrap");
const controlButtons = document.querySelectorAll(".play-control-wrap");
const progressBars = document.querySelectorAll(".progress-bar-now");
const muteIcons = document.querySelectorAll(".mute");
const unmuteIcons = document.querySelectorAll(".unmute");
const videoWraps = document.querySelectorAll(".play-each");
let nowPlaying = document.querySelector(".play-each.playing");
const prevButtons = document.querySelectorAll(".play-prev-btn");
const nextButtons = document.querySelectorAll(".play-next-btn");

// 재생 중이 아닌 영상은 일시정지로 시작

videoWraps.forEach((videoWrap, i) => {
    if (!videoWrap.classList.contains("playing")) {
        videos[i].autoplay = false;
    } else {
        videos[i].autoplay = true;
        nextButtons[i].style.display = "block";
    }
});

// 일시정지, 재생 관련 버튼
// false일 때 클릭 시 재생, true일 때 클릭 시 일시정지
globalThis.flag = false;

videos.forEach((video, i) => {
    video.addEventListener("click", (e) => {
        if (!globalThis.flag) {
            globalThis.flag = true;
            pauseIcons[i].style.display = "none";
            playIcons[i].style.display = "block";
            e.target.pause();
        } else {
            globalThis.flag = false;
            pauseIcons[i].style.display = "block";
            playIcons[i].style.display = "none";
            e.target.play();
        }
    });
});

// 음소거 관련 버튼
muteIcons.forEach((mute, i) => {
    mute.addEventListener("click", (e) => {
        e.target.style.display = "none";
        unmuteIcons[i].style.display = "block";
        videos[i].muted = true;
    });
});

unmuteIcons.forEach((unmute, i) => {
    unmute.addEventListener("click", (e) => {
        e.target.style.display = "none";
        muteIcons[i].style.display = "block";
        videos[i].muted = false;
    });
});

// 진행도 1초마다 증가
videos.forEach((video, i) => {
    video.addEventListener("timeupdate", (e) => {
        let percent = (e.target.currentTime / e.target.duration) * 100;
        progressBars[i].style.width = `${percent}%`;
    });
});
