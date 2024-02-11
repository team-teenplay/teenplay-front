// 회원가입 버튼
const joinButton = document.querySelector(".join-wrap");

// 이메일 형식 검사
function emailCheck () {
    const emailInput = document.querySelector(".email-input");
    const emailLength = document.querySelector(".email-length-error")
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    emailInput.addEventListener(("keyup"), (e) => {
        if (!emailRegex.test(e.target.value)) {
            emailLength.classList.remove("hidden")
            emailInput.classList.add("color");
            return;
        }
        emailLength.classList.add("hidden")
        emailInput.classList.remove("color");
    });
}
emailCheck();

// 이름 글자수 검사
function nameCheck () {
    const nameInput = document.querySelector(".name-input");
    const nameLengthError = document.querySelector(".name-length-error")

    nameInput.addEventListener(("keyup"), (e) => {
        if (e.target.value) {
            if (e.target.value.length < 2) {
                nameLengthError.classList.remove("hidden")
                nameInput.classList.add("color");
                return;
            }
    
            nameLengthError.classList.add("hidden")
            nameInput.classList.remove("color");
        }
    });
}
nameCheck();

// 비밀번호 글자수 검사
function passwordCheck () {
    const passwordInput = document.querySelector(".password-input");
    const passwordLengthError = document.querySelector(".password-length-error");

    passwordInput.addEventListener(("keyup"), (e) => {
        if (e.target.value) {
            if (e.target.value.length < 6) {
                passwordLengthError.classList.remove("hidden")
                passwordInput.classList.add("color");
                return;
            }

            passwordLengthError.classList.add("hidden")
            passwordInput.classList.remove("color");
            joinButton.classList.remove("disabled")
        } 
    });
}
passwordCheck();

// 약관동의
NodeList.prototype.filter = Array.prototype.filter;

// function agreementCheck () {
//     const essentialAgreement = document.querySelectorAll(".agreement-button.essential");
//     const agreementError = document.querySelectorAll(".agreement-error");

//     let allChecked = true;

//     essentialAgreement.forEach((check, index) => {
//         check.addEventListener(("click"), () => {
//             if (!check.checked) {
//                 essentialAgreement[index].style.borderColor = "#CE201B";
//                 agreementError[index].classList.remove("hidden")
//                 allChecked = false;
//             }
//             agreementError[index].classList.add("hidden")
//         });
//     })

//     return allChecked;
// }

function agreementCheck () {
    const essentialAgreement = document.querySelectorAll(".agreement-button.essential");
    // const agreementError = document.querySelectorAll(".agreement-error");

    essentialAgreement.forEach((check, index) => {
        check.addEventListener(("click"), () => {
            if 
        })
    })
    essentialAgreement.filter((agreement) => agreement.checked).length === 3
}

agreementCheck();

// 전체 검사
function allCheck () {
    if (emailCheck() && nameCheck() && passwordCheck() && agreementCheck()) {
        joinButton.classList.remove("disabled");
        return;
    }

    joinButton.classList.add("disabled");
};