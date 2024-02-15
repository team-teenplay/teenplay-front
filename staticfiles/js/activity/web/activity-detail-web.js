// // 관심 활동 클릭 시 이미지 변경 및 모달창 띄우기
let heartCheck = document.querySelector(".like-act-button");
// 관심 행사 클릭 시 모달창 띄우고 삭제하기 위해 확인
let likeModal = document.querySelector(".k-club-modal-wrap");

let likeTextIcon = document.querySelector(".k-club-modal-like-title-text");
let likeTextIconDelete = document.querySelector(".k-club-modal-like-title-text-delete");

heartCheck.addEventListener("click", (e) => {
    // 하트모양의 이미지의 색상을 변경 해주기 위해 확인
    let heartColor = document.querySelector(".like-act-button-image");
    let color = window.getComputedStyle(heartColor);
    // 관심 행사 색상에 따른 문구를 변경하기 위한 확인
    let likeText = document.querySelector(".k-club-modal-like-title-text");
    // 하트가 파란색이라면
    if (e.target && color.getPropertyValue("fill") === "none") {
        heartColor.style.fill = "#CE201B";
        likeModal.style.display = "block";
        // likeText.innerHTML = "관심 활동에 추가되었습니다.";
        likeTextIcon.style.display = "flex";
        likeTextIconDelete.style.display = "none";
    } else {
        heartColor.style.fill = "none";
        // 관심 행사 취소 시 문구 변경
        likeModal.style.display = "block";
        likeTextIcon.style.display = "none";
        likeTextIconDelete.style.display = "flex";
        // likeText.innerHTML = "관심 활동에서 삭제되었습니다.";
    }
});

// 관심 활동 선택 후 닫기 버튼을 클릭했을 때 모달창 닫기
let closeLikeModal = document.querySelector(".k-club-modal-like-button");
closeLikeModal.addEventListener("click", (e) => {
    likeModal.style.display = "none";
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // 특정 버튼 클릭 시 해당 위치로 이동
document.querySelector(".act-intro").addEventListener("click", () => {
    // 이동하려는 대상 div 선택
    const targetDiv = document.querySelector(".summary-box-one");

    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
    });
});

document.querySelector(".act-location").addEventListener("click", () => {
    const targetDiv = document.querySelector(".filp-more");

    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
    });
});

document.querySelector(".act-info").addEventListener("click", () => {
    const targetDiv = document.querySelector(".map-text-content-box");

    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
    });
});

document.querySelector(".act-noti").addEventListener("click", () => {
    const targetDiv = document.querySelector(".feed-main-title-box");

    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
    });
});

document.querySelector(".act-inquiry").addEventListener("click", () => {
    const targetDiv = document.querySelector(".feed-item");

    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
    });
});

document.querySelector(".act-suggestion").addEventListener("click", () => {
    const targetDiv = document.querySelector(".activity-list-more-title");

    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
    });
});

document.querySelector(".act-cancel").addEventListener("click", () => {
    const targetDiv = document.querySelector(".policy-title");

    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
    });
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // 특정 위치로 이동되었을 때 act 아래쪽에 줄이 생기는 액션
// 버튼 선택 시 스타일 변경을 위한 설정  (버튼의 클래스에 따라 변경)
let introLine = document.querySelector(".act-intro");
let locationLine = document.querySelector(".act-location");
let infoLine = document.querySelector(".act-info");
let notiLine = document.querySelector(".act-noti");
let inquiryLine = document.querySelector(".act-inquiry");
let suggetsionLine = document.querySelector(".act-suggestion");

// 특정 div의 위치를 설정
let targetEndContainerDiv = document.querySelector(".flex-items-end-container");
let targetMapDiv = document.querySelector(".map-text-title");
let targetFeedDiv = document.querySelector(".feed-main-title-box");
let targetCommentDiv = document.querySelector(".feed-item");
let targetActivityMore = document.querySelector(".k-comment-input-upload-container");

window.addEventListener("scroll", function () {
    let targetEndContainerPosition = targetEndContainerDiv.offsetTop;
    let targetMapPosition = targetMapDiv.offsetTop;
    let targetFeedPosition = targetFeedDiv.offsetTop;
    let targetCommentPosition = targetCommentDiv.offsetTop;
    let targetActivityMorePosition = targetActivityMore.offsetTop;

    if (document.documentElement.scrollTop < targetEndContainerPosition) {
        // 스크롤 위치에 따라 적절히 조정
        introLine.style.borderBottomWidth = "2px";
        introLine.style.color = "#ce201b";
        locationLine.style.color = "";
        locationLine.style.borderColor = "";
        infoLine.style.color = "";
        infoLine.style.borderColor = "";
        notiLine.style.color = "";
        notiLine.style.borderColor = "";
        inquiryLine.style.color = "";
        inquiryLine.style.borderColor = "";
        suggetsionLine.style.color = "";
        suggetsionLine.style.borderColor = "";
    }
    // 행사장소
    if (document.documentElement.scrollTop >= targetEndContainerPosition && document.documentElement.scrollTop < targetMapPosition) {
        locationLine.style.color = "#ce201b";
        locationLine.style.borderColor = "#ce201b";
        introLine.style.borderBottomWidth = "0";
        introLine.style.color = "rgb(135 141 145 / var(--tw-text-opacity))";
        introLine.style.transition = "color 0.2s, border-bottom-color 0.2s";
    }
    // 행사 정보
    if (document.documentElement.scrollTop >= targetMapPosition && document.documentElement.scrollTop < targetFeedPosition) {
        locationLine.style.color = "";
        locationLine.style.borderColor = "";
        notiLine.style.color = "";
        notiLine.style.borderColor = "";
        inquiryLine.style.color = "";
        inquiryLine.style.borderColor = "";
        suggetsionLine.style.color = "";
        suggetsionLine.style.borderColor = "";
        infoLine.style.color = "#ce201b";
        infoLine.style.borderColor = "#ce201b";
        introLine.style.transition = "color 0.3s, border-bottom-color 0.3s";
    }
    // 행사 공지
    if (document.documentElement.scrollTop >= targetFeedPosition && document.documentElement.scrollTop < targetCommentPosition) {
        locationLine.style.color = "";
        locationLine.style.borderColor = "";
        infoLine.style.color = "";
        infoLine.style.borderColor = "";
        inquiryLine.style.color = "";
        inquiryLine.style.borderColor = "";
        suggetsionLine.style.color = "";
        suggetsionLine.style.borderColor = "";
        notiLine.style.color = "#ce201b";
        notiLine.style.borderColor = "#ce201b";
        notiLine.style.transition = "color 0.3s, border-bottom-color 0.3s";
    }
    // 행사 문의 (댓글)
    if (document.documentElement.scrollTop >= targetCommentPosition && document.documentElement.scrollTop < targetActivityMorePosition) {
        locationLine.style.color = "";
        locationLine.style.borderColor = "";
        infoLine.style.color = "";
        infoLine.style.borderColor = "";
        notiLine.style.color = "";
        notiLine.style.borderColor = "";
        suggetsionLine.style.color = "";
        suggetsionLine.style.borderColor = "";
        inquiryLine.style.color = "#ce201b";
        inquiryLine.style.borderColor = "#ce201b";
        notiLine.style.transition = "color 0.3s, border-bottom-color 0.3s";
    }
    // 추천
    if (document.documentElement.scrollTop > targetActivityMorePosition) {
        locationLine.style.color = "";
        locationLine.style.borderColor = "";
        infoLine.style.color = "";
        infoLine.style.borderColor = "";
        notiLine.style.color = "";
        notiLine.style.borderColor = "";
        inquiryLine.style.color = "";
        inquiryLine.style.borderColor = "";
        suggetsionLine.style.color = "#ce201b";
        suggetsionLine.style.borderColor = "#ce201b";
        suggetsionLine.style.transition = "color 0.1s, border-bottom-color 0.1s";
    }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // 접기 버튼 클릭 시 동작
// 숨겨진 이미지 확인 및 버튼 모양 변경
filpClickBtn = document.querySelector(".filp-button");
filpHiddenClickBtn = document.querySelector(".filp-button-hidden");
filpMoreClickBtn = document.querySelector(".filp-more-hidden");
overflowHidden = document.querySelector(".max-overflow-hidden");
isHiddenShadow = document.querySelector(".is-hidden-shadow");
filpClickBtn.addEventListener("click", (e) => {
    overflowHidden.style.maxHeight = "none";
    isHiddenShadow.style.backgroundImage = "none";
    filpClickBtn.style.display = "none";
    filpHiddenClickBtn.style.display = "flex";
});

filpHiddenClickBtn.addEventListener("click", () => {
    overflowHidden.style.maxHeight = "700px";
    isHiddenShadow.style.backgroundImage = "linear-gradient(to top, var(--tw-gradient-stops))";
    filpClickBtn.style.display = "flex";
    filpHiddenClickBtn.style.display = "none";
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 구독하기 클릭 시 구독하기 모달 띄우기 및 아이콘 띄우기
let subcribeButton = document.querySelector(".subcribe-button");
let subcribeCheckButton = document.querySelector(".subcribe-button-checking");
subcribeButton.addEventListener("click", (e) => {
    if (subcribeButton.innerText == "구독하기") {
        subcribeModalWrap.style.display = "flex";
        subcribeButton.style.display = "none";
        subcribeCheckButton.style.display = "flex";
    }
});

// 구독하기 취소 시 (계속 살펴보기) 발생되는 동작
subcribeCheckButton.addEventListener("click", (e) => {
    if (subcribeCheckButton.innerText == "구독중") {
        subcribeButton.style.display = "flex";
        subcribeCheckButton.style.display = "none";
        subcribeModalWrapCancel.style.display = "flex";
    }
});

// 구독하기 버튼을 클릭한 후 창 닫는 동작
let subcribeModelLeftButton = document.querySelector(".subcribe-left-button");
let subcribeModalWrap = document.querySelector(".subcribe-modal-wrap");
let subcribeModalWrapCancel = document.querySelector(".subcribe-modal-wrap-cancel");

subcribeModelLeftButton.addEventListener("click", (e) => {
    subcribeModalWrap.style.display = "none";
    // subcribeModalWrapCancel.style.display = "none";
});

// 구독중 버튼을 클릭한 후 창 닫는 동작
let subcribeCancelKeepButton = document.querySelector(".subcribe-cancel-keep-button");
subcribeCancelKeepButton.addEventListener("click", (e) => {
    subcribeModalWrapCancel.style.display = "none";
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 관심행사 추가 시 발생되는 동작
let nonLikeDisplay = document.querySelectorAll(".k-like-btn-shadow");
let nonLikeBtn = document.querySelectorAll(".k-like-btn-display");
let likeBtn = document.querySelectorAll(".k-like-btn-display-none");
let subLikeModal = document.querySelector(".k-club-modal-wrap");
let subLikeTextIcon = document.querySelector(".k-club-modal-like-title-text");
let subLikeTextIconDelete = document.querySelector(".k-club-modal-like-title-text-delete");

nonLikeDisplay.forEach((displayButton, i) => {
    displayButton.addEventListener("click", (e) => {
        nonLikeBtn.forEach((nonLikeButton, j) => {
            if (i === j) {
                if (nonLikeBtn[j].style.display === "none") {
                    nonLikeBtn[j].style.display = "flex";
                    likeBtn[j].style.display = "none";
                    subLikeModal.style.display = "flex";
                    subLikeTextIcon.style.display = "none";
                    subLikeTextIconDelete.style.display = "flex";
                } else {
                    nonLikeBtn[j].style.display = "none";
                    likeBtn[j].style.display = "flex";
                    subLikeModal.style.display = "flex";
                    subLikeTextIconDelete.style.display = "none";
                    subLikeTextIcon.style.display = "flex";
                }
            }
        });
    });
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 공유하기 버튼 클릭시 나오는 모달 및 닫기
let shareButton = document.querySelector(".share-button");
let shareModalWrap = document.querySelector(".share-modal-wrap");
shareButton.addEventListener("click", () => {
    shareModalWrap.style.display = "flex";
});

let shareCloseButton = document.querySelector(".share-close-button");
shareCloseButton.addEventListener("click", () => {
    shareModalWrap.style.display = "none";
});
