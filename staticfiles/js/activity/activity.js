// (일시) 라디오 버튼을 모두 돌면서 1개만 선택하도록 체크
document.querySelectorAll(".content-date .radio-everyday").forEach(function (radio) {
    radio.addEventListener("change", function () {
        // > 모든 라디오 버튼을 돌면서 현재 선택된 것 이외의 것들을 언체크
        document.querySelectorAll(".content-date .radio-everyday").forEach(function (otherRadio) {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
                otherRadio.parentNode.nextElementSibling.style.display = "none"; // 다른 라디오 버튼의 텍스트
            }
        });
    });
});

// (참여 방법)라디오 버튼을 모두 돌면서 1개만 선택하도록 체크
document.querySelectorAll(".content-method .radio-everyday").forEach(function (radio) {
    radio.addEventListener("change", function () {
        // > 모든 라디오 버튼을 돌면서 현재 선택된 것 이외의 것들을 언체크
        document.querySelectorAll(".content-method .radio-everyday").forEach(function (otherRadio) {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
                otherRadio.parentNode.nextElementSibling.style.display = "none"; // 다른 라디오 버튼의 텍스트 감춤
            }
        });
    });
});

// (가격) 라디오 버튼을 모두 돌면서 1개만 선택하도록 체크
document.querySelectorAll(".content-method-pay .radio-everyday").forEach(function (radio) {
    radio.addEventListener("change", function () {
        // > 모든 라디오 버튼을 돌면서 현재 선택된 것 이외의 것들을 언체크
        document.querySelectorAll(".content-method-pay .radio-everyday").forEach(function (otherRadio) {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
                otherRadio.parentNode.nextElementSibling.style.display = "none"; // 다른 라디오 버튼의 텍스트 감춤
            }
        });
    });
});
const activeLikeBtnsCopy = document.querySelectorAll(".like-btn-shadow");
const emptyHeartsCopy = document.querySelectorAll(".like-btn-shadow .like-btn-display");
const fullHeartsCopy = document.querySelectorAll(".like-btn-shadow .like-btn-display-none");

// 기간선택 체크 시 기간 달력 display 유무 표시
document.addEventListener("click", (e) => {
    dateRange = document.querySelector(".date-display-none");
    if (e.target.id == "ev-radio-102") {
        dateRange.style.display = "block";
        // > 달력 선택 시 창이 사라지지 않게 만드는 용도
    } else if (e.target.classList == "relative-date") {
        dateRange.style.display = "block";
    } else {
        dateRange.style.display = "none";
    }
});

// 좋아요 선택 시 동작하는 js
const modalWrapCopy = document.querySelector(".club-modal-wrap");
// > 좋아요 선택 시 관심 설정할 때 표시할 부분
const modalLikeContainerCopy = document.querySelector(".club-modal-like-wrap:not(.unlike)");
// > 좋아요 선택 시 관심 해제할 때 표시할 부분
const modalUnlikeContainerCopy = document.querySelector(".club-modal-like-wrap.unlike");

activeLikeBtnsCopy.forEach((button, i) => {
    button.addEventListener("click", () => {
        modalWrapCopy.style.display = "block";
        if (emptyHeartsCopy[i].style.display === "none") {
            modalUnlikeContainerCopy.style.display = "block";
            modalLikeContainerCopy.style.display = "none";
            emptyHeartsCopy[i].style.display = "block";
            fullHeartsCopy[i].style.display = "none";
        } else {
            modalUnlikeContainerCopy.style.display = "none";
            modalLikeContainerCopy.style.display = "block";
            emptyHeartsCopy[i].style.display = "none";
            fullHeartsCopy[i].style.display = "block";
        }
    });
});

// 좋아요 선택 시 창 내 버튼 클릭 시 모달창 닫기
const modalLikeExitBtnCopy = document.querySelector(".club-modal-like-button");
const modalUnlikeExitBtnCopy = document.querySelector(".club-modal-unlike-button");

function exitModal() {
    modalWrapCopy.style.display = "none";
}

modalLikeExitBtnCopy.addEventListener("click", exitModal);
modalUnlikeExitBtnCopy.addEventListener("click", exitModal);

// 추천순을 선택 했을 때 bold 부분
const buttons = document.querySelectorAll("button[name='selected-recommend-btn']");
const filterSpans = document.querySelectorAll("span.filter-span");

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        filterSpans.forEach((span, j) => {
            console.log(i, j);
            if (i == j && !span.classList.contains("font-bold-choice")) {
                span.classList.add("font-bold-choice");
            } else if (i != j && span.classList.contains("font-bold-choice")) {
                span.classList.remove("font-bold-choice");
            }
        });
    });
});

// 1. radio 버튼 클릭 된 값을 가져와서 hidden box의 명칭을 변경하기
// 1-1. find-filter-bg의 값을 가져와야함 (이런 식으로 id를 부여해서 선택한 이미지를 변경할것 )

let radioCheck = document.querySelectorAll(".date-box .radio-everyday");
// 1-1. hidden 필드에 숨겨져있는 div의 명칭 가져오기
let dateText = document.getElementById("dateText");
radioCheck.forEach((radio) => {
    radio.addEventListener("click", (e) => {
        // 클릭한 위치의 value 값을 div의 text 명칭으로 변경하기
        dateText.innerHTML = e.target.value;
    });
});

// 2. check 버튼 클릭 시 해당 값을 가져오기
let dateCheck = document.querySelector(".end-text-box");
console.log(dateCheck);
dateCheck.addEventListener("click", (e) => {
    console.log(e.target);
});

// 3. box 별로 값을 들어가게 만들기 (일시 ,모집종료 행사, 지역, 행사유형 등)
// 4. 먄약 hidden의 값에 값이 1개라도 들어가 있다면 hidden display 하기
// (혹은 x 버튼을 클릭했을 때 해당 div에 display를 none으로 하고, hidden 큰 div가
// 개수가 0이 되면(display 전체가 none 이 되면 안보이게 변경))
