// 1단계 - 모임 이름 입력 검사 (버튼 활성화)

const nameInput = document.querySelector("input.name-form-input");
const nameButton = document.querySelector("button.name-form-button");
nameInput.addEventListener("keyup", (e) => {
    if (nameInput.value) {
        nameButton.classList.remove("disabled");
        return;
    }
    if (!nameButton.classList.contains("disabled")) {
        nameButton.classList.add("disabled");
    }
});

// 다음 버튼 클릭 시 내용 변경(2단계로 이동)

const firstContent = document.querySelector(".name-form-wrap");
const secondContent = document.querySelector(".desc-form-wrap");
nameButton.addEventListener("click", () => {
    firstContent.style.display = "none";
    secondContent.style.display = "block";
});

// 2단계
// 이전 단계 버튼 클릭 시 다시 1단계로

const prevButton = document.querySelector(".desc-form-prev-button");
prevButton.addEventListener("click", () => {
    firstContent.style.display = "block";
    secondContent.style.display = "none";
});

// 소개글 입력 검사

const descInput = document.querySelector("input.desc-form-input");
const descButton = document.querySelector(".desc-form-button");
descInput.addEventListener("keyup", () => {
    if (descInput.value) {
        descButton.classList.remove("disabled");
        return;
    }
    if (!descButton.classList.contains("disabled")) {
        descButton.classList.add("disabled");
    }
});

// 다음 버튼 클릭 시 내용 변경(3단계로 이동)

const thirdContent = document.querySelector(".img-form-wrap");
descButton.addEventListener("click", () => {
    secondContent.style.display = "none";
    thirdContent.style.display = "block";
});

// 3단계
// 이전 단계 버튼 클릭 시 다시 2단계로

const lastPrevButton = document.querySelector(".img-form-prev-button");
lastPrevButton.addEventListener("click", () => {
    secondContent.style.display = "block";
    thirdContent.style.display = "none";
});

// 개설 완료 및 건너뛰기 버튼은 서버 작업 시 연결.

// "모임 프로필 업로드" 버튼 클릭 시 프로필 사진 input 활성화(파일 업로드)
const profileUploadBtn = document.querySelector(
    ".img-form-profile-upload-button"
);
const openProfile = () => {
    document.getElementById("profile-image").click();
};

// "모임 커버 업로드" 버튼 클릭 시 커버 사진 input 활성화(파일 업로드)
const coverUploadBtn = document.querySelector(".cover-upload-wrap");
const coverUploadInput = document.getElementById("background-image");
const openCover = () => {
    coverUploadInput.click();
};

// "파일 업로드" 버튼 클릭 시 커버 사진 input 활성화(파일 업로드)
const fileUploadBtn = document.querySelector("span.upload-span");

// 드래그 앤 드롭은 추후 서버 담당 시 구현합니다.
