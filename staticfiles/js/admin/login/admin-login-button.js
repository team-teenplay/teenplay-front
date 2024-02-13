function updateButtonStatus() {
    let inputElements = document.querySelectorAll(
        ".main-login-id, .main-login-pw"
    );
    let buttonElement = document.querySelector(".main-login-button");

    let isAnyInputEmpty = Array.from(inputElements).some(
        (input) => input.value.trim() === ""
    );

    buttonElement.disabled = isAnyInputEmpty;
    buttonElement.style.backgroundColor = isAnyInputEmpty
        ? "#f3f3f4"
        : "#9F0D08";
    buttonElement.style.cursor = isAnyInputEmpty ? "default" : "pointer";
    buttonElement.style.color = isAnyInputEmpty ? "black" : "white";
}
