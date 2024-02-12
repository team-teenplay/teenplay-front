NodeList.prototype.filter = Array.prototype.filter;

const pauseIcons = document.querySelectorAll(".pause");
const playIcons = document.querySelectorAll(".restart");
const videos = document.querySelectorAll(".play-video");
const videoInfos = document.querySelectorAll(".play-info-wrap");
const controlButtons = document.querySelectorAll(".play-control-wrap");
const progressBars = document.querySelectorAll(".progress-bar-now");
const muteIcons = document.querySelectorAll(".mute");
const unmuteIcons = document.querySelectorAll(".unmute");
const videoWraps = document.querySelectorAll(".play-each:not(.default)");
let nowPlaying = document.querySelector(".play-each.playing");
const prevButtons = document.querySelectorAll(".play-prev-btn");
const nextButtons = document.querySelectorAll(".play-next-btn");
const defaultVideoWraps = document.querySelectorAll(".play-each.default");
const nextVideoWraps = document.querySelectorAll(".play-each.pending");

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
globalThis.flags = new Array(videos.length);

videos.forEach((video, i) => {
    video.addEventListener("click", (e) => {
        if (!globalThis.flags[i]) {
            globalThis.flags[i] = true;
            pauseIcons[i].style.display = "none";
            playIcons[i].style.display = "block";
            e.target.pause();
        } else {
            globalThis.flags[i] = false;
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

// 이동

const centerStart = nowPlaying.getBoundingClientRect().left;
const move = (playingIdx) => {
    const allVideos = document.querySelectorAll(".play-each");
    allVideos.forEach((video, i) => {
        let dist = 0;
        if (i < playingIdx) {
            dist = centerStart - (playingIdx - i) * 246 - 312;
            video.style.transform = `translate(${dist}px) scale(0.4)`;
        } else if (i > playingIdx) {
            dist = centerStart - (playingIdx - i - 1) * 246 - 312;
            video.style.transform = `translate(${dist}px) scale(0.4)`;
        }
    });
};

move(4);

// 화살표 클릭 시 이동
const showPrevBtn = (playingIdx) => {
    prevButtons.forEach((button, i) => {
        if (playingIdx > 4 && i + 4 == playingIdx) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
};
const showNextBtn = (playingIdx) => {
    nextButtons.forEach((button, i) => {
        if (i + 4 == playingIdx) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
};

nextButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
        let playingIdx = i + 4;
        const allVideos = document.querySelectorAll(".play-each");
        allVideos[playingIdx].classList.remove("playing");
        allVideos[playingIdx].classList.add("pending");
        allVideos[playingIdx].style.transform = "";
        allVideos[playingIdx].style.top = "";
        allVideos[playingIdx].style.left = "";
        allVideos[playingIdx].style.scale = "";
        videos[playingIdx - 4].pause();
        pauseIcons[playingIdx - 4].style.display = "none";
        playIcons[playingIdx - 4].style.display = "block";
        globalThis.flags[playingIdx - 4] = true;
        playingIdx++;
        allVideos[playingIdx].classList.add("playing");
        allVideos[playingIdx].classList.remove("pending");
        allVideos[playingIdx].style.transform = "translate3d(-50%, -50%, 0)";
        allVideos[playingIdx].style.top = "50%";
        allVideos[playingIdx].style.left = "50%";
        allVideos[playingIdx].style.scale = "1";
        showPrevBtn(playingIdx);
        showNextBtn(playingIdx);
        move(playingIdx);
        videos[playingIdx - 4].play();
        pauseIcons[playingIdx - 4].style.display = "block";
        playIcons[playingIdx - 4].style.display = "none";
        globalThis.flags[playingIdx - 4] = false;
    });
});
prevButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
        let playingIdx = i + 4;
        const allVideos = document.querySelectorAll(".play-each");
        allVideos[playingIdx].classList.remove("playing");
        allVideos[playingIdx].classList.add("pending");
        allVideos[playingIdx].style.transform = "";
        allVideos[playingIdx].style.top = "";
        allVideos[playingIdx].style.left = "";
        allVideos[playingIdx].style.scale = "";
        videos[playingIdx - 4].pause();
        pauseIcons[playingIdx - 4].style.display = "none";
        playIcons[playingIdx - 4].style.display = "block";
        globalThis.flags[playingIdx - 4] = true;
        playingIdx--;
        allVideos[playingIdx].classList.add("playing");
        allVideos[playingIdx].classList.remove("pending");
        allVideos[playingIdx].classList.add("playing");
        allVideos[playingIdx].classList.remove("pending");
        allVideos[playingIdx].style.transform = "translate3d(-50%, -50%, 0)";
        allVideos[playingIdx].style.top = "50%";
        allVideos[playingIdx].style.left = "50%";
        allVideos[playingIdx].style.scale = "1";
        showPrevBtn(playingIdx);
        showNextBtn(playingIdx);
        move(playingIdx);
        videos[playingIdx - 4].play();
        globalThis.flags[playingIdx - 4] = false;
        pauseIcons[playingIdx - 4].style.display = "block";
        playIcons[playingIdx - 4].style.display = "none";
        globalThis.flags[playingIdx - 4] = false;
    });
});
