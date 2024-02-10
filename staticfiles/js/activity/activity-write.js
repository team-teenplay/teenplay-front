// 동의합니다 radio 버튼 선택 체크
let surveyRadioTie = document.querySelector(".survey-radio-tie");
surveyRadioTie.addEventListener("click", (e) => {
    let radio = document.querySelector(".ev-radio-111");
    if (!radio.checked) {
        radio.checked = "true";
    }
});

// 동의하기 약관 checkbox 전체 버튼 및 개별 선택 체크
let aggreementBetweenCenter = document.querySelector(".aggreement-between-center");
let aggreementAllChecks = document.querySelector(".aggreement-all-checks");
let aggreementAgeCheck = document.querySelector(".aggreement-age-check");
let aggreementPersonerCheck = document.querySelector(".aggreement-personerinfo-check");
let aggreementServiceCheck = document.querySelector(".aggreement-service-check");
let aggreementPrivacyCheck = document.querySelector(".aggreement-privacy-check");
let aggreementPayCheck = document.querySelector(".aggreement-pay-check");

let aggreementFirst = document.querySelector(".aggreement-item-checkbox-tie");
aggreementFirst.addEventListener("click", (e) => {
    if (!aggreementAgeCheck.checked) {
        aggreementAgeCheck.checked = true;
    } else {
        aggreementAgeCheck.checked = false;
    }
});
let aggreementAnothers = document.querySelectorAll(".aggreement-between-center");

aggreementAnothers.forEach((another, i) => {
    another.addEventListener("click", (e) => {
        if (i == 0) {
            if (!aggreementAllChecks.checked) {
                aggreementAllChecks.checked = true;
                aggreementAgeCheck.checked = true;
                aggreementPersonerCheck.checked = true;
                aggreementServiceCheck.checked = true;
                aggreementPayCheck.checked = true;
                aggreementPrivacyCheck.checked = true;
            } else {
                aggreementAllChecks.checked = false;
                aggreementAgeCheck.checked = false;
                aggreementPersonerCheck.checked = false;
                aggreementServiceCheck.checked = false;
                aggreementPayCheck.checked = false;
                aggreementPrivacyCheck.checked = false;
            }
        }
        if (i == 1) {
            if (!aggreementPersonerCheck.checked) {
                aggreementPersonerCheck.checked = true;
            } else {
                aggreementPersonerCheck.checked = false;
            }
        }
        if (i == 2) {
            if (!aggreementServiceCheck.checked) {
                aggreementServiceCheck.checked = true;
            } else {
                aggreementServiceCheck.checked = false;
            }
        }
        if (i == 3) {
            if (!aggreementPrivacyCheck.checked) {
                aggreementPrivacyCheck.checked = true;
            } else {
                aggreementPrivacyCheck.checked = false;
            }
        }
        if (i == 4) {
            if (!aggreementPayCheck.checked) {
                aggreementPayCheck.checked = true;
            } else {
                aggreementPayCheck.checked = false;
            }
        }
    });
});

let test = document.querySelectorAll(".aggreement-check-box .aggreement-items-box input");
test.forEach((tt) => {
    if (tt.checked) {
        aggreementAllChecks.checked = "true";
    }
});
