// 재설정 메일 받기 버튼
const emailSend = document.querySelector(".email-send")

// 이메일 입력 창
const inputItem = document.querySelector(".input-item");

// 이메일 미입력 에러 메세지
const inputError = document.querySelector(".input-error")

inputItem.addEventListener("keyup", () => {
    if (inputItem.value) {
        emailSend.classList.remove("disabled");
        return;
    }
    if (!emailSend.classList.contains("disabled")) {
        emailSend.classList.add("disabled");
    }
});

// 이메일 정상 입력 후 재설정 메일 받기 클릭 시 활성화 되는 모달창
emailSend.addEventListener("click", () => {
    Swal.fire(
        "비밀번호 재설정 메일 발송 완료",
        "입력하신 메일로 수신하신 링크를 통해 <br> 비밀번호를 재설정하실 수 있습니다.",
        "success"
    );
});
