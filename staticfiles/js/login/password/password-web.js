// 재설정 메일 받기 버튼
const emailSend = document.querySelector(".email-send")

// 이메일 입력 창
const inputItem = document.querySelector(".input-item");

// 이메일 미입력 에러 메세지
const inputError = document.querySelector(".input-error")

// (예시) 버튼 클릭 시 오류 메세지 출력
emailSend.addEventListener("click", () => {
    inputError.classList.remove("hidden");
    inputItem.style = "border-color: #CE201B";
});