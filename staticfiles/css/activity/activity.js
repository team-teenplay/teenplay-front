// (일시) 라디오 버튼을 모두 돌면서 1개만 선택하도록 체크
document.querySelectorAll(".content-date .radio-everyday").forEach(function (radio) {
    radio.addEventListener("change", function () {
        // 모든 라디오 버튼을 돌면서 현재 선택된 것 이외의 것들을 언체크
        document.querySelectorAll('input[class="radio-everyday"]').forEach(function (otherRadio) {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
                otherRadio.parentNode.nextElementSibling.style.display = "none"; // 다른 라디오 버튼의 텍스트 감춤
                // 기간선택 체크 시 기간 달력 display 유무 표시
                if (radio.id == "ev-radio-102") {
                    dateRange = document.querySelector(".date-display-none");
                    dateRange.style.display = "block";
                } else {
                    dateRange.style.display = "none";
                }
            }
        });
    });
});

// (참여 방법)라디오 버튼을 모두 돌면서 1개반 선택하도록 체크
document.querySelectorAll(".content-method .radio-everyday").forEach(function (radio) {
    radio.addEventListener("change", function () {
        // 모든 라디오 버튼을 돌면서 현재 선택된 것 이외의 것들을 언체크
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
        // 모든 라디오 버튼을 돌면서 현재 선택된 것 이외의 것들을 언체크
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

// 전체 모달
const modalWrapCopy = document.querySelector(".club-modal-wrap");
// 모달 중에서 관심 설정할 때 표시할 부분
const modalLikeContainerCopy = document.querySelector(".club-modal-like-wrap:not(.unlike)");
// 모달 중에서 관심 해제할 때 표시할 부분
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

// // 모달 창 내 버튼 클릭 시 모달창 닫기
const modalLikeExitBtnCopy = document.querySelector(".club-modal-like-button");
const modalUnlikeExitBtnCopy = document.querySelector(".club-modal-unlike-button");

function exitModal() {
    modalWrapCopy.style.display = "none";
}

modalLikeExitBtnCopy.addEventListener("click", exitModal);
modalUnlikeExitBtnCopy.addEventListener("click", exitModal);

// const buttons = document.querySelectorAll(".right-text-tie button");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if (e.target.closest(".best-text-btn")) {
//             buttons[0].classList.add("font-bold-choice");
//             buttons[1].classList.remove("font-bold-choice");
//             buttons[2].classList.remove("font-bold-choice");
//         } else if (e.target.closest(".new-btn")) {
//             buttons[0].classList.remove("font-bold-choice");
//             buttons[1].classList.add("font-bold-choice");
//             buttons[2].classList.remove("font-bold-choice");
//         } else {
//             buttons[0].classList.remove("font-bold-choice");
//             buttons[1].classList.remove("font-bold-choice");
//             buttons[2].classList.add("font-bold-choice");
//         }
//     });
// });

const elements = document.querySelectorAll("[name='selected-recommend-btn']");
elements.forEach((element) => {
    console.log(element.innerHTML);
});
