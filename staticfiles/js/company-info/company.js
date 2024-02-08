const historyBtn = document.querySelector(".more-btn");
const cropLine = document.querySelector(".histroy-crop-line");
const contentBox = document.querySelector(".history-content-box");

historyBtn.addEventListener("click", (e) => {
    cropLine.style.borderTop = "none";
    historyBtn.style.display = "none";
    contentBox.style.height = "max-content";
});

const moveHistory = document.querySelector(".history-text");
const moveHistorySection = document.querySelector(".section-history");

moveHistory.addEventListener("click", function () {
    window.scrollTo({
        top: moveHistorySection.offsetTop,
        behavior: "smooth",
    });
});

const moveTeam = document.querySelector(".teams-text");
const moveTeamSection = document.querySelector(".section-teams");

moveTeam.addEventListener("click", function () {
    window.scrollTo({
        top: moveTeamSection.offsetTop,
        behavior: "smooth",
    });
});

const moveNews = document.querySelector(".news-text");
const moveNewsSection = document.querySelector(".section-news");

moveNews.addEventListener("click", function () {
    window.scrollTo({
        top: moveNewsSection.offsetTop,
        behavior: "smooth",
    });
});

const moveContact = document.querySelector(".contact-us-text");
const moveContactSection = document.querySelector(".section-contact-us");

moveContact.addEventListener("click", function () {
    window.scrollTo({
        top: moveContactSection.offsetTop,
        behavior: "smooth",
    });
});

// 스크롤 위치 별 history team, news, contact us 항목
const historyBg = document.querySelector(".menu-item-history");
const historyText = document.querySelector(".history-text");
const teamsBg = document.querySelector(".menu-item-teams");
const teamsText = document.querySelector(".teams-text");
const newsBg = document.querySelector(".menu-item-news");
const newsText = document.querySelector(".news-text");
const contactUsBg = document.querySelector(".menu-item-contact-us");
const contactUsText = document.querySelector(".contact-us-text");
const historyBtn2 = document.querySelector(".more-btn");
const hisStyle = getComputedStyle(historyBtn2);

window.addEventListener("scroll", function () {
    if (hisStyle.display == "inline-block") {
        if (window.scrollY <= 360) {
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 360 && window.scrollY <= 1000) {
            historyBg.style.backgroundColor = "rgb(93, 63, 191)";
            historyText.style.color = "white";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 1000 && window.scrollY <= 1800) {
            teamsBg.style.backgroundColor = "#5D3FBF";
            teamsText.style.color = "#fff";
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 1800 && window.scrollY <= 2800) {
            newsBg.style.backgroundColor = "#5D3FBF";
            newsText.style.color = "#fff";
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 2800) {
            contactUsBg.style.backgroundColor = "#5D3FBF";
            contactUsText.style.color = "#fff";
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
        }
    } else {
        if (window.scrollY <= 360) {
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 360 && window.scrollY <= 2000) {
            historyBg.style.backgroundColor = "rgb(93, 63, 191)";
            historyText.style.color = "white";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 2000 && window.scrollY <= 2900) {
            teamsBg.style.backgroundColor = "#5D3FBF";
            teamsText.style.color = "#fff";
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 2900 && window.scrollY <= 3950) {
            newsBg.style.backgroundColor = "#5D3FBF";
            newsText.style.color = "#fff";
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            contactUsBg.style.backgroundColor = "#fff";
            contactUsText.style.color = "rgb(93, 63, 191)";
        }
        if (window.scrollY > 3950) {
            contactUsBg.style.backgroundColor = "#5D3FBF";
            contactUsText.style.color = "#fff";
            historyBg.style.backgroundColor = "#fff";
            historyText.style.color = "rgb(93, 63, 191)";
            teamsBg.style.backgroundColor = "#fff";
            teamsText.style.color = "rgb(93, 63, 191)";
            newsBg.style.backgroundColor = "#fff";
            newsText.style.color = "rgb(93, 63, 191)";
        }
    }
});

// 모달 팝업 open / close
const memberProfileClick = document.querySelectorAll(".member");
const memberPop = document.querySelector(".teams-member-pop");
const memberPopBk = document.querySelector(".member-pop-background");
const memberPopIcon = document.querySelector(".pop-member-btn-close");
memberProfileClick.forEach((members) => {
    members.addEventListener("click", (e) => {
        memberPop.style.display = "flex";
        memberPop.style.alignItems = "center";
        memberPop.style.justifyContent = "center";
    });
});

memberPopBk.addEventListener("click", (e) => {
    memberPop.style.display = "none";
});

memberPopIcon.addEventListener("click", (e) => {
    memberPop.style.display = "none";
});

// 올라가기 아이콘 수정
const goTopIcon = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY <= 350) {
        goTopIcon.classList.add("hidden");
    } else {
        goTopIcon.classList.remove("hidden");
    }
});

goTopIcon.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
