// 처음에 페이지 로드 시 9번째 활동부터는(존재한다면) 숨겨놓기
const finishedActivities = document.querySelectorAll(".finished-events-boxes");
if (finishedActivities.length >= 9) {
    for (let i = 8; i < finishedActivities.length; i++) {
        finishedActivities[i].style.display = "none";
    }
}

// 처음에 게시물이 8개 이하라면 더보기 버튼 숨기기
const moreBtn = document.querySelector(".show-more-btn");
if (finishedActivities.length < 9) {
    moreBtn.style.display = "none";
}

// 더보기 버튼 클릭 시 8개 더 표시 후 마지막이라면 더보기 버튼도 없애기
// 이때 더보기 버튼 안의 숫자도 바꿔주어야 한다.
// 먼저 현재 몇 개 표시되어 있는지를 구해주는 함수를 분리하여 작성해준다.(재사용을 위해)
function getShownCounts() {
    let currentShownCount = 0;
    for (let i = 0; i < finishedActivities.length; i++) {
        if (finishedActivities[i].style.display === "none") {
            currentShownCount = i;
            break;
        }
    }
    return currentShownCount;
}

const moreCount = document.querySelector(".show-more-counts");
// 우선 페이지 로드 시 더보기 버튼에 입력할 값
// 현재 몇개 표시되어있는지 계산해주어야 한다.
let count = getShownCounts();
moreCount.innerText = `(${count}/${finishedActivities.length})`;

moreBtn.addEventListener("click", () => {
    // 먼저 현재 몇개 표시되어있는지를 구한다.
    let currentShownCount = getShownCounts();
    // 남은 개수가 8개 이하라면 이번 클릭에서 더보기 버튼이 없어져야 한다.
    if (finishedActivities.length - currentShownCount <= 8) {
        moreBtn.style.display = "none";
        for (
            let i = currentShownCount - 1;
            i < finishedActivities.length;
            i++
        ) {
            finishedActivities[i].style.display = "block";
        }
    }
    // 남은 개수가 9개 이상이라면 8개 더 표시 후에도 더보기 버튼이 남아있어야 한다.
    else {
        for (let i = currentShownCount - 1; i < currentShownCount + 8; i++) {
            finishedActivities[i].style.display = "block";
        }
        moreCount.innerText = `(${currentShownCount + 8}/${
            finishedActivities.length
        })`;
    }
});

// 탭 클릭 시 활성화되는 탭 변경,
// 그리고 아래 표시되는 내용 싹 다 변경
const activityFilterWrap = document.querySelector(".club-detail-filter-event");
const activityFilterBtn = document.querySelector(
    ".club-detail-filter-event .club-detail-filter-button"
);
const infoFilterWrap = document.querySelector(".club-detail-filter-info");
const infoFilterBtn = document.querySelector(
    ".club-detail-filter-info .club-detail-filter-button"
);
const activityContent = document.querySelector(
    "div.club-detail-desc-container"
);
const infoContent = document.querySelector(".club-info");

activityFilterBtn.addEventListener("click", () => {
    infoFilterWrap.style.border = "none";
    if (!infoFilterBtn.classList.contains("off")) {
        infoFilterBtn.classList.add("off");
    }
    if (activityFilterBtn.classList.contains("off")) {
        activityFilterBtn.classList.remove("off");
    }
    activityFilterWrap.style.borderBottom = "2px solid #CE201B";
    activityContent.style.display = "block";
    infoContent.style.display = "none";
});

infoFilterBtn.addEventListener("click", () => {
    activityFilterWrap.style.border = "none";
    if (!activityFilterBtn.classList.contains("off")) {
        activityFilterBtn.classList.add("off");
    }
    if (infoFilterBtn.classList.contains("off")) {
        infoFilterBtn.classList.remove("off");
    }
    infoFilterWrap.style.borderBottom = "2px solid #CE201B";
    activityContent.style.display = "none";
    infoContent.style.display = "block";
});

// 공유하기 버튼 클릭 시 모달창으로 클립보드에 url 복사
const shareBtn = document.querySelector(".club-top-button");
function clipCopy() {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = window.document.location.href;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    Swal.fire(
        "URL 복사 완료",
        "주소가 클립보드에 복사되었습니다. <br> 원하는 곳에 붙여넣기 해주세요.",
        "success"
    );
}
shareBtn.addEventListener("click", clipCopy);

// 하트 아이콘 클릭 시 모달창 하트 이미지 변경, 모달창 출력
const activeLikeBtns = document.querySelectorAll(".club-detail-like-button");
const emptyHearts = document.querySelectorAll(
    ".club-detail-like-button .club-detail-like-icon.empty"
);
const fullHearts = document.querySelectorAll(
    ".club-detail-like-button .club-detail-like-icon.full"
);
// 전체 모달
const modalWrap = document.querySelector(".club-modal-wrap");
// 모달 중에서 관심 설정할 때 표시할 부분
const modalLikeContainer = document.querySelector(
    ".club-modal-like-wrap:not(.unlike)"
);
// 모달 중에서 관심 해제할 때 표시할 부분
const modalUnlikeContainer = document.querySelector(
    ".club-modal-like-wrap.unlike"
);

activeLikeBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        modalWrap.style.display = "block";
        if (emptyHearts[i].style.display === "none") {
            modalUnlikeContainer.style.display = "block";
            modalLikeContainer.style.display = "none";
            emptyHearts[i].style.display = "block";
            fullHearts[i].style.display = "none";
        } else {
            modalUnlikeContainer.style.display = "none";
            modalLikeContainer.style.display = "block";
            emptyHearts[i].style.display = "none";
            fullHearts[i].style.display = "block";
        }
    });
});

const finishedLikeBtns = document.querySelectorAll(".finished-events-like-btn");
const finishedEmptyHearts = document.querySelectorAll(
    ".finished-events-like-btn .club-detail-like-icon.empty"
);
const finishedFullHearts = document.querySelectorAll(
    ".finished-events-like-btn .club-detail-like-icon.full"
);
finishedLikeBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        modalWrap.style.display = "block";
        if (finishedEmptyHearts[i].style.display === "none") {
            modalUnlikeContainer.style.display = "block";
            modalLikeContainer.style.display = "none";
            finishedEmptyHearts[i].style.display = "block";
            finishedFullHearts[i].style.display = "none";
        } else {
            modalUnlikeContainer.style.display = "none";
            modalLikeContainer.style.display = "block";
            finishedEmptyHearts[i].style.display = "none";
            finishedFullHearts[i].style.display = "block";
        }
    });
});

// 모달 창 내 버튼 클릭 시 모달창 닫기
const modalLikeExitBtn = document.querySelector(".club-modal-like-button");
const modalUnlikeExitBtn = document.querySelector(".club-modal-unlike-button");

function exitModal() {
    modalWrap.style.display = "none";
}

modalLikeExitBtn.addEventListener("click", exitModal);
modalUnlikeExitBtn.addEventListener("click", exitModal);
