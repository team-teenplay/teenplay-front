// 로그인 버튼
const loginButton = document.querySelector(".login-button");

// 아이디 미입력 이벤트
const idInputBox = document.querySelector(".id-input-container");
const passwordInputBox =document.querySelector(".password-input-container");
const boxCheck = (idInputBox && passwordInputBox)

// 아이디 비밀번호 입력 이벤트
boxCheck.addEventListener("keyup", () => {
    if (boxCheck.value) {
        loginButton.classList.remove("disabled");
        return;
    }
    if (!boxCheck.value) {
        loginButton.classList.add("disabled");
    }
})

// 로그인 유지 클릭 시 메세지 출력 이벤트
const keepCheckBox = document.querySelector(".keep-checkbox");
const keepErrorMessage = document.querySelector(".warning-message-wrap");

keepCheckBox.addEventListener("click", () => {
    keepErrorMessage.classList.toggle("hidden");
});