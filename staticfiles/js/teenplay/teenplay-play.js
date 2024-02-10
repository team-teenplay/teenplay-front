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

// 첫 4개(default값) 위치 세팅
let halfWidth = window.innerWidth / 2;
halfWidth -= 246;

defaultVideoWraps.forEach((video, i) => {
    video.style.transform = `translate(${halfWidth - 200 * (4 - i)}px) scale(0.4)`;
});

// 다음 4개 위치 세팅
halfWidth += 246;
nextVideoWraps.forEach((videoWrap, i) => {
    videoWrap.style.transform = `translate(${halfWidth + 200 * (i + 1)}px) scale(0.4)`;
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

// 화살표 클릭 시 슬라이드 효과
// 아래 작업에 추가로, 비동기로 다음 틴플 영상을 가져오는 코드를
// 서버 작업 시 추가해야 합니다.
halfWidth -= 246;
// > 화살표(다음)
function slideNext() {
    const allVideoWraps = document.querySelectorAll(".play-each");
    const videos = document.querySelectorAll(".play-video");
    let idx = 0;
    // 현재 재생 중인 비디오의 인덱스를 구한 후
    // 1 증가시켜 다음 비디오를 playing으로 바꿔준다.
    allVideoWraps.forEach((video, i) => {
        if (video.classList.contains("playing")) {
            idx = i + 1;
            video.classList.remove("playing");
            return;
        }
    });
    allVideoWraps[idx].classList.remove("pending");
    allVideoWraps[idx].classList.add("playing");
    allVideoWraps[idx].style.transform = "translate3d(-50%, -50%, 0)";

    videos[idx - 5].pause();
    videos[idx - 4].play();
    globalThis.flag = false;

    prevButtons.forEach((prev) => {
        prev.style.display = "none";
    });
    if (idx > 4) {
        prevButtons[idx - 4].style.display = "block";
    }
    nextButtons.forEach((next) => {
        next.style.display = "none";
    });
    if (idx < allVideoWraps.length - 1) {
        nextButtons[idx - 4].style.display = "block";
    }

    // 이제 해당 인덱스를 기준으로 양옆의 요소를 이동시킨다.
    allVideoWraps.forEach((video, i) => {
        if (i < idx) {
            video.style.transform = `translate(${halfWidth - 200 * (idx - i)}px) scale(0.4)`;
        } else if (i > idx) {
            video.style.transform = `translate(${halfWidth + 46 + 200 * (i - idx + 1)}px) scale(0.4)`;
        }
    });
}

// 화살표 버튼의 클릭 이벤트로 추가
nextButtons.forEach((button) => {
    button.addEventListener("click", slideNext);
});

// < 화살표 (이전)
// halfWidth += 246;
function slidePrev() {
    const allVideoWraps = document.querySelectorAll(".play-each");
    const videos = document.querySelectorAll(".play-video");
    let idx = 0;
    // 현재 재생 중인 비디오의 인덱스를 구한 후
    // 1 감소시켜 이전 비디오를 playing으로 바꿔준다.
    allVideoWraps.forEach((video, i) => {
        if (video.classList.contains("playing")) {
            idx = i - 1;
            video.classList.remove("playing");
            return;
        }
    });
    allVideoWraps[idx].classList.remove("pending");
    allVideoWraps[idx].style.transform = "translate3d(-50%, -50%, 0)";
    allVideoWraps[idx].classList.add("playing");

    videos[idx - 3].pause();
    videos[idx - 4].play();
    globalThis.flag = false;

    prevButtons.forEach((prev) => {
        prev.style.display = "none";
    });
    if (idx > 4) {
        prevButtons[idx - 4].style.display = "block";
    }
    nextButtons.forEach((next) => {
        next.style.display = "none";
    });
    if (idx < allVideoWraps.length - 1) {
        nextButtons[idx - 4].style.display = "block";
    }

    // 이제 해당 인덱스를 기준으로 양옆의 요소를 이동시킨다.
    allVideoWraps.forEach((video, i) => {
        if (i < idx) {
            video.style.transform = `translate(${halfWidth - 200 * (idx - i)}px) scale(0.4)`;
        } else if (i > idx) {
            video.style.transform = `translate(${halfWidth + 46 + 200 * (i - idx + 1)}px) scale(0.4)`;
        }
    });
}

// 화살표 버튼의 클릭 이벤트로 추가
prevButtons.forEach((prev) => {
    prev.addEventListener("click", slidePrev);
});
