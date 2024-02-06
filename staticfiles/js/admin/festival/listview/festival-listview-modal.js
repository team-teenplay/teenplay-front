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
            }

            // 모달 닫기
            modal.classList.add("hidden");
            modalBack.classList.add("hidden");
        });
    });
}
