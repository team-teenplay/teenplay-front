// checkbox가 1개 이상 checked일 경우 공지 삭제 버튼 활성화
const clupNoticeDelete = document.querySelector(".clup-notice-delete");
const clupNoticeCheckboxes = document.querySelectorAll("#clup-notice-checkbox");
const allChecked = document.querySelector("#all-checked");

clupNoticeCheckboxes.forEach((clupNoticeCheckbox) => {
    clupNoticeCheckbox.addEventListener("input", () => {
        const clupNoticeCheckedCheckboxes = document.querySelectorAll("#clup-notice-checkbox:checked");

        // 체크된 체크박스가 없다면 공지 삭제 비활성화, 있다면 활성화
        disabledBtn();

        // 체크된 체크박스 개수가 전체 체크박스 개수와 같다면 allChecked 체크상태로, 아니라면 풀린상태로
        if (clupNoticeCheckedCheckboxes.length == clupNoticeCheckboxes.length) {
            allChecked.checked = true;
        } else {
            allChecked.checked = false;
        }
    });
});

// 항목의 체크박스 클릭 시 모든 체크박스에 발생하는 이벤트
allChecked.addEventListener("input", (e) => {
    clupNoticeCheckboxes.forEach((clupNoticeCheckbox) => {
        clupNoticeCheckbox.checked = e.target.checked;
    });

    disabledBtn();
});

// 공지 삭제 클릭 시 모달을 표시는 이벤트
const deleteModalWrap = document.querySelector(".delete-modal-wrap");
const deleteModalContainer = deleteModalWrap.querySelector(".delete-modal-container");

clupNoticeDelete.addEventListener("click", () => {
    deleteModalContainer.style.animation = "popUp 0.5s";
    deleteModalWrap.style.display = "block";
});

// 삭제 모달 내 버튼 클릭 시 발생하는 이벤트
const deleteCheckModalContainer = deleteModalWrap.querySelector(".delete-check-modal-container");
const deleteModalBtns = deleteModalWrap.querySelectorAll("button");

deleteModalBtns.forEach((deleteModalBtn) => {
    deleteModalBtn.addEventListener("click", (e) => {
        deleteModalContainer.style.animation = "popDown 0.5s";
        if (e.target.className == "delete-modal-cancle-btn") {
            setTimeout(() => {
                deleteModalWrap.style.display = "none";
            }, 450);
        } else if (e.target.className == "delete-btn") {
            let clupNoticeCheckedCheckboxes = document.querySelectorAll("#clup-notice-checkbox:checked");

            clupNoticeCheckedCheckboxes.forEach((clupNoticeCheckedCheckbox) => {
                clupNoticeCheckedCheckbox.closest(".clup-notice-info").remove();
            });

            allChecked.checked = false;
            disabledBtn();

            setTimeout(() => {
                deleteModalContainer.style.display = "none";
                deleteCheckModalContainer.style.animation = "popUp 0.5s";
                deleteCheckModalContainer.style.display = "flex";
            }, 450);
        } else {
            deleteCheckModalContainer.style.animation = "popDown 0.5s";
            setTimeout(() => {
                deleteCheckModalContainer.style.removeProperty("animation");
                deleteCheckModalContainer.style.display = "none";
                deleteModalContainer.style.display = "flex";
                deleteModalWrap.style.display = "none";
            }, 450);
        }
    });
});

// 공지 삭제 비활성화 함수
const disabledBtn = () => {
    const clupNoticeCheckedCheckboxes = document.querySelectorAll("#clup-notice-checkbox:checked");

    // 체크된 체크박스가 없다면 공지 삭제 비활성화, 있다면 활성화
    if (clupNoticeCheckedCheckboxes.length == 0) {
        clupNoticeDelete.disabled = true;
    } else {
        clupNoticeDelete.disabled = false;
    }
};

//  제목 클릭 시 상세보기가 나오고 나와 있을 경우 끄는 이벤트
const clupNoticeTitles = document.querySelectorAll(".clup-notice-title");

clupNoticeTitles.forEach((clupNoticeTitle) => {
    clupNoticeTitle.addEventListener("click", (e) => {
        let targetSvg = clupNoticeTitle.querySelector(".club-notice-show-icon");

        if (targetSvg.classList.contains("true")) {
            targetSvg.classList.remove("true");
            targetSvg.removeAttribute("transform");
            clupNoticeTitle.closest(".clup-notice-info").querySelector(".club-notice-content-box").removeAttribute("style");
            return;
        }
        targetSvg.classList.add("true");
        clupNoticeTitle.querySelector(".club-notice-show-icon").setAttribute("transform", "rotate(180)");
        clupNoticeTitle.closest(".clup-notice-info").querySelector(".club-notice-content-box").style.display = "block";
    });
});
