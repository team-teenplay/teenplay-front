// 마이페이지 간이 목록 이외 클릭 시 none처리 이벤트
const mypageServices = document.querySelector(".member-services");
const mypageMenu = document.querySelector(".mypage-menu");
const AllWhithoutClass = document.querySelectorAll(
    "body :not(.member-services) :not(.mypage-menu)"
);
document.addEventListener("click", (e) => {
    if (!e.target.closest(".member-services")) {
        mypageMenu.classList.remove("display:flex");
    } else {
        console.log("else");
        if (e.target.closest(".member-service-menu-btn")) {
            mypageMenu.classList.toggle("display:flex");
        }
    }
});
