// HTML 요소들을 가져옵니다.
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// 각 버튼을 클릭했을 때 실행될 함수를 정의합니다.
button1.addEventListener("click", function () {
    // 1번 버튼에 add-color 클래스를 추가하고, 다른 버튼에서는 제거합니다.
    button1.classList.add("add-color");
    button2.classList.remove("add-color");
    button3.classList.remove("add-color");
});

button2.addEventListener("click", function () {
    // 2번 버튼에 add-color 클래스를 추가하고, 다른 버튼에서는 제거합니다.
    button1.classList.remove("add-color");
    button2.classList.add("add-color");
    button3.classList.remove("add-color");
});

button3.addEventListener("click", function () {
    // 3번 버튼에 add-color 클래스를 추가하고, 다른 버튼에서는 제거합니다.
    button1.classList.remove("add-color");
    button2.classList.remove("add-color");
    button3.classList.add("add-color");
});
