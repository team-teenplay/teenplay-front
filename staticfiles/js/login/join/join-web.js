// 회원가입 버튼
const joinButton = document.querySelector(".join-wrap");

// 이메일 형식 검사
let emailValue = false;
const emailInput = document.querySelector(".email-input");
const emailLength = document.querySelector(".email-length-error");
const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

emailInput.addEventListener("keyup", (e) => {
    if (!emailRegex.test(e.target.value)) {
        emailLength.classList.remove("hidden");
        emailInput.classList.add("color");
        emailValue = false;
    } else {
        emailLength.classList.add("hidden");
        emailInput.classList.remove("color");
        emailValue = true;
    }
    allCheck();
});

// 이름 글자수 검사
let nameValue = false;
const nameInput = document.querySelector(".name-input");
const nameLengthError = document.querySelector(".name-length-error");

nameInput.addEventListener("keyup", (e) => {
    if (e.target.value) {
        if (e.target.value.length < 2) {
            nameLengthError.classList.remove("hidden");
            nameInput.classList.add("color");
            nameValue = false;
        } else {
            nameLengthError.classList.add("hidden");
            nameInput.classList.remove("color");
            nameValue = true;
        }
    } 
    allCheck();
});

// 비밀번호 글자수 검사
let passwordValue = false;
const passwordInput = document.querySelector(".password-input");
const passwordLengthError = document.querySelector(".password-length-error");

passwordInput.addEventListener("keyup", (e) => {
    if (e.target.value) {
        if (e.target.value.length < 6) {
            passwordLengthError.classList.remove("hidden");
            passwordInput.classList.add("color");
            passwordValue = false;
        } else {
            passwordLengthError.classList.add("hidden");
            passwordInput.classList.remove("color");
            passwordValue = true;
        }
    }
    allCheck();
});

// 약관동의
NodeList.prototype.filter = Array.prototype.filter;

let essentialValue = false;
const essentialAgreement = document.querySelectorAll(".agreement-button.essential");

essentialAgreement.forEach((agreement) => {
    agreement.addEventListener("click", () => {
        essentialValue = essentialAgreement.filter((agreement) => agreement.checked).length === 3;
        allCheck();
    });
});

// 전체 검사
function allCheck() {
    if (emailValue && nameValue && passwordValue && essentialValue) {
        joinButton.classList.remove("disabled");
        return;
    }
    joinButton.classList.add("disabled");
}
