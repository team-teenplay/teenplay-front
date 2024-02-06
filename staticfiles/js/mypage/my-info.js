// 변경 버튼
const changeBtn = document.querySelector(".change-btn");
// 회원 이름 보여주는 태그
const nicknameView = document.querySelector(".nickname-view");
// 이름 수정하는 태그
const nicknameModify = document.querySelector(".nickname-modify");
// 변경할 이름을 입력하는 input
const nicknameInput = document.querySelector(".nickname-input");
// nicknameView안의 span태그 안의 text를 저장
let nickname = nicknameView.firstElementChild;

// 변경 클릭 시 nicknameView을 감추고 nicknameModify을 보여주고 span의 text를 input의 value에 넣어준다.
changeBtn.addEventListener("click", () => {
    nicknameView.style.display = "none";
    nicknameModify.style.display = "";

    nicknameInput.value = nickname.innerText;
});

// 확인 버튼
const nicknameFix = document.querySelector(".nickname-fix");

// 확인 클릭 시 nicknameModify을 감추고 nicknameView을 보여주고 input의 value를 span에 넣어준다.
nicknameFix.addEventListener("click", () => {
    nicknameView.style.display = "flex";
    nicknameModify.style.display = "none";

    nickname.innerText = nicknameInput.value;
});

// 관심 분야 클릭 시 클래스 추가로 속성 변화
const interestCaregories = document.querySelectorAll(".interest-category");

interestCaregories.forEach((interestCaregory) => {
    interestCaregory.addEventListener("click", () => {
        if (interestCaregory.classList.contains("selected-category")) {
            interestCaregory.classList.remove("selected-category");
            return;
        }
        interestCaregory.classList.add("selected-category");
    });
});

// birthYear에 출생연도 1910 ~ 2010 option 생성
const birthYear = document.querySelector(".birth-year");

for (let i = 0; 100 >= i; i++) {
    birthYear.innerHTML += `<option value="${2010 - i}">${2010 - i}</option>`;
}
