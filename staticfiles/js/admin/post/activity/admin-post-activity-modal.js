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

// 검색창

const searchModaladd = document.getElementById(
    "admin-message-modal-search-add"
);
const searchOpenadd = document.querySelector(".main-message-info-button-add");
const searchSendadd = document.querySelector(
    ".admin-message-modal-search-send-add"
);
const searchReceiveadd = document.querySelector(
    ".admin-message-modal-search-receive-add"
);

const searchTextadd = document.querySelector(
    ".main-message-info-button-text-add"
);

// 검색 버튼 클릭 시 모달 열기
searchOpenadd.addEventListener("click", (event) => {
    // 이벤트 전파를 막기 위해 stopPropagation() 호출
    event.stopPropagation();
    searchModaladd.classList.remove("hidden");

    // 모달 외부를 클릭했을 때 이벤트 처리
    document.addEventListener("click", (event) => {
        if (
            event.target !== searchOpenadd &&
            !searchModaladd.contains(event.target)
        ) {
            // 클릭된 요소가 검색 버튼이 아니고 모달 창에 속하지 않으면 모달을 닫음
            searchModaladd.classList.add("hidden");
        }
    });
});

// "위시리스트" 버튼 클릭 시 모달 닫고 텍스트 변경
searchSendadd.addEventListener("click", () => {
    searchModaladd.classList.add("hidden");
    if (searchTextadd.textContent === "제목") {
        searchTextadd.textContent = "작성자";
    }
});

// "받은사람" 버튼 클릭 시 모달 닫고 텍스트 변경
searchReceiveadd.addEventListener("click", () => {
    searchModaladd.classList.add("hidden");
    if (searchTextadd.textContent === "작성자") {
        searchTextadd.textContent = "제목";
    }
});
