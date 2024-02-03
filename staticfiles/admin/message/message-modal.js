// 모달창
const modalMessageOpenButtons = document.querySelectorAll(
    ".member-message-list-button"
);
const modalMessageCloseButtons = document.querySelectorAll(
    ".admin-message-modal-left-button"
);
const messagemodal = document.getElementById("admin-message-modal");

modalMessageOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
        messagemodal.classList.remove("hidden");
    });
});

modalMessageCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        messagemodal.classList.add("hidden");
    });
});

// 모달창
const modalOpenButtons = document.querySelectorAll(".member-user-list-button");
const modalCloseButtons = document.querySelectorAll(
    ".admin-user-modal-left-button"
);
const modal = document.getElementById("admin-user-modal");

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
