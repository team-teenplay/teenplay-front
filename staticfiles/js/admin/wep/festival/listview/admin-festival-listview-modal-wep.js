// 모달창
const modalOpenButtons = document.querySelectorAll(".member-user-list-button");
const modalCloseButtons = document.querySelectorAll(
    ".admin-user-modal-left-button"
);
const modalAddCloseButtons = document.querySelectorAll(
    ".admin-user-modal-right-button"
);
const modal = document.getElementById("admin-user-modal");
const modalBack = document.getElementById("admin-user-modal-backdrop");

modalOpenButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const targetId = event.currentTarget.getAttribute("data-target");
        currentTargetLi = document.querySelector(`li[data-id="${targetId}"]`);

        // 모달 열기
        modal.classList.remove("hidden");
        modalBack.classList.remove("hidden");
    });
});

modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.add("hidden");
        modalBack.classList.add("hidden");
    });
});
const confirmDeleteButtons = document.querySelectorAll(
    ".admin-user-modal-right-button"
);

if (confirmDeleteButtons.length > 0) {
    confirmDeleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // 현재 대상 li 삭제
            if (currentTargetLi) {
                currentTargetLi.remove();
                currentTargetLi = null;
                updateTotalCount();
            }

            // 모달 닫기
            modal.classList.add("hidden");
            modalBack.classList.add("hidden");
        });
        updateTotalCount();
    });
    updateTotalCount();
}

const searchModal = document.getElementById("admin-message-modal-search");
const searchOpen = document.querySelector(".main-message-info-button");
const searchSend = document.querySelector(".admin-message-modal-search-send");
const searchReceive = document.querySelector(
    ".admin-message-modal-search-receive"
);

const searchText = document.querySelector(".main-message-info-button-text");

// 검색 버튼 클릭 시 모달 열기
searchOpen.addEventListener("click", (event) => {
    // 이벤트 전파를 막기 위해 stopPropagation() 호출
    event.stopPropagation();
    searchModal.classList.remove("hidden");
});

// 모달 외부를 클릭했을 때 이벤트 처리
document.addEventListener("click", (event) => {
    if (event.target !== searchOpen && !searchModal.contains(event.target)) {
        // 클릭된 요소가 검색 버튼이 아니고 모달 창에 속하지 않으면 모달을 닫음
        searchModal.classList.add("hidden");
    }
});

// "보낸사람" 버튼 클릭 시 모달 닫고 텍스트 변경
searchSend.addEventListener("click", () => {
    searchModal.classList.add("hidden");
    if (searchText.textContent === "장소") {
        searchText.textContent = "축제제목";
    }
});

// "받은사람" 버튼 클릭 시 모달 닫고 텍스트 변경
searchReceive.addEventListener("click", () => {
    searchModal.classList.add("hidden");
    if (searchText.textContent === "축제제목") {
        searchText.textContent = "장소";
    }
});

const modalDetailOpenButtons = document.querySelectorAll(
    ".member-user-list-detail-button"
);
const modalDetailCloseButtons = document.querySelectorAll(
    ".admin-user-modal-left-detail-button"
);
const modalAdddetailCloseButtons = document.querySelectorAll(
    ".admin-user-modal-right-detail-button"
);
const detailmodal = document.getElementById("admin-post-modal");
const detailmodalBack = document.getElementById("admin-user-modal-backdrop");

modalDetailOpenButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const targetId = event.currentTarget.getAttribute("data-target");
        currentTargetLi = document.querySelector(`li[data-id="${targetId}"]`);

        // 모달 열기
        detailmodal.classList.remove("hidden");
        detailmodalBack.classList.remove("hidden");
    });
});

modalDetailCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        detailmodal.classList.add("hidden");
        detailmodalBack.classList.add("hidden");
    });
});
const confirmDeleteButtonss = document.querySelectorAll(
    ".admin-user-modal-right-detail-button"
);

if (confirmDeleteButtonss.length > 0) {
    confirmDeleteButtonss.forEach((button) => {
        button.addEventListener("click", () => {
            // 현재 대상 li 선택함
            // if (currentTargetLi) {
            // }

            // 모달 닫기
            detailmodal.classList.add("hidden");
            detailmodalBack.classList.add("hidden");
        });
    });
}
