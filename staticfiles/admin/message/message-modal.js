// 모달창
const modalOpenButtons = document.querySelectorAll(
    ".member-message-list-button"
);
const modalCloseButtons = document.querySelectorAll(
    ".admin-message-modal-left-button"
);
const modal = document.getElementById("admin-message-modal");

modalOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
});

modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});
