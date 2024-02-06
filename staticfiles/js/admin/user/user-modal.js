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
