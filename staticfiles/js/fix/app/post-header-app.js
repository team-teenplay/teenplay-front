// 마이페이지 간이 목록 이외 클릭 시 none처리 이벤트
// const mypageServices = document.querySelector(".member-services");
// const mypageMenu = document.querySelector(".mypage-menu");
// const AllWhithoutClass = document.querySelectorAll(
//     "body :not(.member-services) :not(.mypage-menu)"
// );
// document.addEventListener("click", (e) => {
//     if (!e.target.closest(".member-services")) {
//         mypageMenu.classList.remove("display:flex");
//     } else {
//         console.log("else");
//         if (e.target.closest(".member-service-menu-btn")) {
//             mypageMenu.classList.toggle("display:flex");
//         }
//     }
// });

// 닉네임 클릭 시 아래에서 올라오는 모달창
const slideModal = document.querySelector(".mypage-menu");
const modalShowButton = document.querySelector(".member-service-menu-btn.sign");
modalShowButton.addEventListener("click", () => {
    if (!slideModal.classList.contains("clicked")) {
        slideModal.classList.add("clicked");
        slideModal.classList.remove("hidden");
        slideModal.style.display = "flex";
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".member-services")) {
        slideModal.classList.add("hidden");
        slideModal.classList.remove("clicked");
        setTimeout(() => {
            slideModal.style.display = "none";
        }, 500);
    } else {
        if (e.target.closest(".member-service-menu-btn")) {
            slideModal.style.display = "flex";
            slideModal.classList.add("clicked");
            slideModal.classList.remove("hidden");
        }
    }
});
