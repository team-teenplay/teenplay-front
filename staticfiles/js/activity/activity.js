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
            if (i == j && !span.classList.contains("font-bold-choice")) {
                span.classList.add("font-bold-choice");
            } else if (i != j && span.classList.contains("font-bold-choice")) {
                span.classList.remove("font-bold-choice");
            }
        });
    });
});

//  radio 버튼 클릭 된 값을 가져와서 hidden box의 명칭을 변경하기
let radioCheck = document.querySelectorAll(".date-box .radio-everyday");

radioCheck.forEach((radio) => {
    radio.addEventListener("click", (e) => {
        // 클릭한 위치의 value 값을 div의 text 명칭으로 변경하기
        let dateTextRadio = document.querySelector(".find-filter-bg");
        let dateText = document.getElementById("date-text");
        if (e.target.value == "모든날") {
            dateText.innerHTML = e.target.value;
            dateTextRadio.style.display = "none";
        } else {
            dateText.innerHTML = e.target.value;
            dateTextRadio.style.display = "flex";
        }
    });
});

let joinCheck = document.querySelectorAll(".method-box .radio-everyday");

joinCheck.forEach((join) => {
    join.addEventListener("click", (e) => {
        // 클릭한 위치의 value 값을 div의 text 명칭으로 변경하기
        let joinTextRadio = document.querySelector(".find-filter-bg-join");
        let joinText = document.getElementById("join-content");
        if (e.target.value == "전체") {
            joinText.innerHTML = e.target.value;
            joinTextRadio.style.display = "none";
        } else {
            joinText.innerHTML = e.target.value;
            joinTextRadio.style.display = "flex";
        }
    });
});

let payCheck = document.querySelectorAll(".method-box-pay .radio-everyday");

payCheck.forEach((pay) => {
    pay.addEventListener("click", (e) => {
        // 클릭한 위치의 value 값을 div의 text 명칭으로 변경하기
        let payTextRadio = document.querySelector(".find-filter-bg-pay");
        let payText = document.getElementById("pay-content");
        if (e.target.value == "") {
            payText.innerHTML = e.target.value;
            payTextRadio.style.display = "none";
        } else {
            payText.innerHTML = e.target.value;
            payTextRadio.style.display = "flex";
        }
    });
});

let blockLocation = document.querySelector(".block-location");
blockLocation.addEventListener("change", (e) => {
    let locationTextRadio = document.querySelector(".find-filter-bg-location");
    let locationText = document.getElementById("location-content");
    if (e.target.value == "전체") {
        locationText.innerHTML = e.target.value;
        locationTextRadio.style.display = "none";
    } else {
        locationText.innerHTML = e.target.value;
        locationTextRadio.style.display = "flex";
    }
});

// 체크박스를 선택했을 때 div 추가되는 구문
let endDateTie = document.querySelector(".end-date-tie");
endDateTie.addEventListener("click", (e) => {
    if (e.target.tagName == "INPUT") {
        if (e.target.checked) {
            let hiddenBg = document.querySelector(".hidden-filter-container-check");
            hiddenBg.innerHTML += `<div class="find-filter-bg-two" id="date-end-activity style="display: flex" value="${e.target.value}">
                                        <div id="date-text">${e.target.value}</div>
                                        <button class="find-filter-exit">
                                            <svg class="exit-icon-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" id="exit-icon-button">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>`;
        }
    }
});

// 반대로 해당 버튼을 클릭했을 때 체크가 풀리는 부분을 만들어 줌
endDateTie.addEventListener("click", (e) => {
    if (e.target.tagName == "INPUT") {
        if (!e.target.checked) {
            let values = e.target.value;
            let divToRemove = document.querySelector(".find-filter-bg-two[value='" + values + "']");
            divToRemove.parentNode.removeChild(divToRemove);
            // 위에서 div 생성 시 id값으로 생성해 줬기 때문에 해당 id 값을 찾아서 div를 지워주면 된다
        }
    }
});

// 버튼을 클릭했을 때 행사분야 display(checkbox) 선택해서 보여주기 위한 div 추가
// > 행사분야의 체크박스를 선택했을 떄 나오는 input.value값을 알기위한 변수
let actCategoryCenter = document.querySelectorAll(".activity-center");

// > 행사 분야 내부에 여러 카테고리 중 클릭이 가능한 부분이 있는지 확인을 위한 반복 구문 사용
actCategoryCenter.forEach((actCategory) => {
    // > 해당 행사 구문에서 반복을 돌리던 중 check이벤트가 발생 시
    actCategory.addEventListener("click", (e) => {
        // > 해당 이벤트의 target의 태그 이름이 input일 때
        if (e.target.tagName == "INPUT") {
            // > input의 checked 가 true로 되었을 경우
            if (e.target.checked) {
                // > 숨겨진 항목을 표기하는 hidden div 내부에 target 의 value 값을 추가하여
                // > 특정 HTML을 추가 한디
                let hiddenBg = document.querySelector(".hidden-filter-container-check");
                hiddenBg.innerHTML += `<div class="find-filter-bg-three" id="date-text-f-category style="display: flex" value="${e.target.value}">
                                        <div id="date-text">${e.target.value}</div>
                                        <button class="find-filter-exit">
                                            <svg class="exit-icon-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" id="exit-icon-button">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>`;
            }
        }
    });
});
// 반대로 해당 버튼을 클릭했을 때 체크가 풀리는 부분을 만들어 줌
actCategoryCenter.forEach((actCategory) => {
    actCategory.addEventListener("click", (e) => {
        if (e.target.tagName == "INPUT") {
            if (!e.target.checked) {
                let values = e.target.value;
                let divToRemove = document.querySelector(".find-filter-bg-three[value='" + values + "']");
                divToRemove.parentNode.removeChild(divToRemove);
                // 위에서 div 생성 시 id값으로 생성해 줬기 때문에 해당 id 값을 찾아서 div를 지워주면 된다
            }
        }
    });
});

let actCategoryCenterContent = document.querySelectorAll(".act-category-center");

// > 행사우형 내부에 여러 카테고리 중 클릭이 가능한 부분이 있는지 확인을 위한 반복 구문 사용
actCategoryCenterContent.forEach((actCategory) => {
    // > 해당 행사 구문에서 반복을 돌리던 중 check이벤트가 발생 시
    actCategory.addEventListener("click", (e) => {
        // > 해당 이벤트의 target의 태그 이름이 input일 때
        if (e.target.tagName == "INPUT") {
            // > input의 checked 가 true로 되었을 경우
            if (e.target.checked) {
                // > 숨겨진 항목을 표기하는 hidden div 내부에 target 의 value 값을 추가하여
                // > 특정 HTML을 추가 한디
                let hiddenBg = document.querySelector(".hidden-filter-container-check");
                hiddenBg.innerHTML += `<div class="find-filter-bg-three" id="date-text-f-category style="display: flex" value="${e.target.value}">
                                        <div id="date-text">${e.target.value}</div>
                                        <button class="find-filter-exit">
                                            <svg class="exit-icon-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" id="exit-icon-button">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>`;
            }
        }
    });
});
// 반대로 해당 버튼을 클릭했을 때 체크가 풀리는 부분을 만들어 줌
actCategoryCenterContent.forEach((actCategory) => {
    actCategory.addEventListener("click", (e) => {
        if (e.target.tagName == "INPUT") {
            if (!e.target.checked) {
                let values = e.target.value;
                let divToRemove = document.querySelector(".find-filter-bg-three[value='" + values + "']");
                divToRemove.parentNode.removeChild(divToRemove);
                // 위에서 div 생성 시 id값으로 생성해 줬기 때문에 해당 id 값을 찾아서 div를 지워주면 된다
            }
        }
    });
});

// 필터 타이틀에서 x 버튼 클릭 시 display 가 none으로 변경되고 초기 상태로 돌아가는 기능
let checkExit = document.getElementById("hidden-filter-container-check");

checkExit.addEventListener("click", (e) => {
    if (e.target.classList.contains("exit-icon-button")) {
        let parentDiv = e.target.closest(".find-filter-bg");
        if (parentDiv) {
            parentDiv.style.display = "none";

            document.querySelectorAll(".content-date .radio-everyday").forEach(function (otherRadio) {
                console.log(otherRadio.id);
                if (otherRadio.id == "ev-radio-98") {
                    otherRadio.checked = true;
                } else {
                    otherRadio.checked = false;
                }
            });
        }
    }
});

checkExit.addEventListener("click", (e) => {
    if (e.target.classList.contains("exit-icon-button")) {
        let parentDiv = e.target.closest(".find-filter-bg-join");
        if (parentDiv) {
            parentDiv.style.display = "none";

            document.querySelectorAll(".content-method .radio-everyday").forEach(function (otherRadio) {
                console.log(otherRadio.id);
                if (otherRadio.id == "ev-radio-115") {
                    otherRadio.checked = true;
                } else {
                    otherRadio.checked = false;
                }
            });
        }
    }
});

checkExit.addEventListener("click", (e) => {
    if (e.target.classList.contains("exit-icon-button")) {
        let parentDiv = e.target.closest(".find-filter-bg-pay");
        if (parentDiv) {
            parentDiv.style.display = "none";

            document.querySelectorAll(".content-method-pay .radio-everyday").forEach(function (otherRadio) {
                console.log(otherRadio.id);
                if (otherRadio.id == "ev-radio-118") {
                    otherRadio.checked = true;
                } else {
                    otherRadio.checked = false;
                }
            });
        }
    }
});

// 치크박스 선택 시 삭제되는 기능
