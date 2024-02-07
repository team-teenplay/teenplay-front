// 모달 삭제창
const modalOpenButtons = document.querySelectorAll(".member-user-list-button");
const modalCloseButtons = document.querySelectorAll(
    ".admin-user-modal-left-button"
);
const modalAddCloseButtons = document.querySelectorAll(
    ".admin-user-modal-right-button"
);
const modal = document.getElementById("admin-user-modal");
const modalBack = document.getElementById("admin-user-modal-backdrop");
let currentTargetLi; // 현재 대상 li 요소를 저장하는 변수

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

// 확인 삭제 버튼 클릭 시
modalAddCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // 현재 대상 li 삭제
        if (currentTargetLi) {
            currentTargetLi.remove();
            currentTargetLi = null;
            updateTotalCount(); // 삭제가 완료된 후에 전체 숫자 업데이트
        }

        // 모달 닫기
        modal.classList.add("hidden");
        modalBack.classList.add("hidden");
    });
});
// 모달 수정창

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
