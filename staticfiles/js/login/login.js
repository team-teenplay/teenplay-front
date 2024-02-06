// 로그인 버튼
const loginButton = document.querySelector(".login-button");

// 아이디 미입력 이벤트
const idInputBox = document.querySelector(".id-input-container");
const idInputError = document.querySelector(".id-input-bottom");

const passwordInputBox =document.querySelector(".password-input-container");
const passwordInputError =document.querySelector(".password-input-bottom");

// 예시를 위해 빈칸만 비교해(버튼클릭 시 오류 메세지 출력)
loginButton.addEventListener("click", () => {
    idInputError.classList.remove("hidden");
    passwordInputError.classList.remove("hidden");
    idInputBox.style = "border-color: #CE201B";
    passwordInputBox.style = "border-color: #CE201B";
});

// 로그인 유지 클릭 시 메세지 출력 이벤트
const keepCheckBox = document.querySelector(".keep-checkbox");
const keepErrorMessage = document.querySelector(".warning-message-wrap");

keepCheckBox.addEventListener("click", () => {
    keepErrorMessage.classList.toggle("hidden");
});