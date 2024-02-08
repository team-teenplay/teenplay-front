// 모달창
const modalOpenButtons = document.querySelectorAll(".member-user-list-button");
const modalCloseButtons = document.querySelectorAll(
    ".admin-user-modal-left-button"
);
const modal = document.getElementById("admin-user-modal");
const modalBack = document.getElementById("admin-user-modal-backdrop");

modalOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
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

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("admin-user-modal");
    const toggleButtons = document.querySelectorAll(".toggle-button");
    const applyButton = document.getElementById("modalApplyButton");
    const cancelButton = document.getElementById("modalCloseButton");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const userId = this.getAttribute("data-target");
            // 모달에 사용자 ID를 설정
            modal.setAttribute("data-user-id", userId);
            modal.classList.remove("hidden");
        });
    });

    cancelButton.addEventListener("click", function () {
        modal.classList.add("hidden");
        document.body.classList.remove("admin-user-modal-backdrop");
    });

    applyButton.addEventListener("click", function () {
        const userId = modal.getAttribute("data-user-id");
        const userStatus = document.querySelector(`[data-id="${userId}"]`);

        // 여기에서 상태를 변경하는 로직을 추가
        if (userStatus.textContent.trim() === "활동중") {
            userStatus.textContent = "정지";
        } else if (userStatus.textContent.trim() === "정지") {
            userStatus.textContent = "활동중";
        }

        modal.classList.add("hidden");
        modalBack.classList.add("hidden");
        document.body.classList.remove("admin-user-modal-backdrop");
    });
});

function resizeTextarea() {
    const textarea = document.getElementById("modal-text");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

// 활동중 / 정지 모달

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

// 공개 / 비공개 버튼

const searchModal = document.getElementById("admin-message-modal-search");
const searchOpen = document.querySelector(".main-wish-sellect-button");
const searchSend = document.querySelector(".admin-message-modal-search-send");
const searchReceive = document.querySelector(
    ".admin-message-modal-search-receive"
);
const searchText = document.querySelector(".main-wish-sellect-button-span");
const searchadd = document.querySelector(
    ".admin-message-modal-search-donotreceive"
);
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

// "공개/비공개" 버튼 클릭 시 모달 닫고 텍스트 변경
searchReceive.addEventListener("click", () => {
    searchModal.classList.add("hidden");
    searchText.textContent = "활동중/정지";
});
// "공개" 버튼 클릭 시 모달 닫고 텍스트 변경
searchSend.addEventListener("click", () => {
    searchModal.classList.add("hidden");
    searchText.textContent = "활동중";
});

// "비공개" 버튼 클릭 시 모달 닫고 텍스트 변경

searchadd.addEventListener("click", () => {
    searchModal.classList.add("hidden");
    searchText.textContent = "정지";
});

// -------------------------------------------------
// 공개 비공개 버튼
document.addEventListener("DOMContentLoaded", function () {
    const allItems = document.querySelectorAll(".main-user-list");

    function updateTotalCount() {
        // 숫자 세는 코드
        const visibleItems = document.querySelectorAll(
            ".main-user-list:not(.hidden)"
        );
        const totalCount = visibleItems.length;
        // 숫자를 표시할 요소에 totalCount를 업데이트합니다.
        document.getElementById("total-count").textContent = totalCount;
    }

    document
        .querySelector(".admin-message-modal-search-receive")
        .addEventListener("click", function () {
            allItems.forEach((item) => {
                item.classList.remove("hidden");
            });
            updateTotalCount(); // 버튼 클릭 후 숫자 업데이트
        });

    document
        .querySelector(".admin-message-modal-search-send")
        .addEventListener("click", function () {
            allItems.forEach((item) => {
                if (
                    item
                        .querySelector(".main-user-list-message")
                        .textContent.trim() !== "활동중"
                ) {
                    item.classList.add("hidden");
                } else {
                    item.classList.remove("hidden");
                }
            });
            updateTotalCount(); // 버튼 클릭 후 숫자 업데이트
        });

    document
        .querySelector(".admin-message-modal-search-donotreceive")
        .addEventListener("click", function () {
            allItems.forEach((item) => {
                if (
                    item
                        .querySelector(".main-user-list-message")
                        .textContent.trim() !== "정지"
                ) {
                    item.classList.add("hidden");
                } else {
                    item.classList.remove("hidden");
                }
            });
            updateTotalCount(); // 버튼 클릭 후 숫자 업데이트
        });

    // 페이지가 로드될 때도 숫자를 업데이트합니다.
    updateTotalCount();
});
