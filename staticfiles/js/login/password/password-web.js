// 재설정 메일 받기 버튼
const emailSend = document.querySelector(".email-send")

// 이메일 입력 창
const inputItem = document.querySelector(".input-item");

// 이메일 미입력 에러 메세지
const inputError = document.querySelector(".input-error")

// (예시) 버튼 클릭 시 오류 메세지 출력
// emailSend.addEventListener("click", () => {
//     inputError.classList.remove("hidden");
//     inputItem.style = "border-color: #CE201B";
// });

emailSend.addEventListener("click", () => {
    Swal.fire(
        "비밀번호 재설정 메일 발송 완료",
        "입력하신 메일로 수신하신 링크를 통해 <br> 비밀번호를 재설정하실 수 있습니다.",
        "success"
    );
});
