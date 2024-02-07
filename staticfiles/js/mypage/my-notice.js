const noticeDeletes = document.querySelectorAll(".notice-delete");
const noticeDeleteModal = document.querySelector(".notice-delete-modal");
const noticeDeleteBox = document.querySelector(".notice-delete-box");
let noticeTarget;

noticeDeletes.forEach((noticeDelete) => {
    noticeDelete.addEventListener("click", (e) => {
        noticeTarget = e.target.closest(".notice-container");
        noticeDeleteBox.style.animation = "popUp 0.5s";
        noticeDeleteModal.style.display = "block";
    });
});

const noticeModalBtns = document.querySelectorAll(".notice-delete-btns button[type=button]");

noticeModalBtns.forEach((noticeModalBtn) => {
    noticeModalBtn.addEventListener("click", (e) => {
        noticeDeleteBox.style.animation = "popDown 0.5s";
        if (e.target.className == "delete-check-btn") {
            setTimeout(() => {
                noticeDeleteModal.style.display = "none";
                noticeTarget.remove();
            }, 450);
            return;
        }
        setTimeout(() => {
            noticeDeleteModal.style.display = "none";
        }, 450);
    });
});
