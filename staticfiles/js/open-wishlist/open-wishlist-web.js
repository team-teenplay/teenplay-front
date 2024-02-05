// 상단 카테고리 선택 이벤트
const wishlistItems = document.querySelectorAll(".top-categroy-item");

wishlistItems.forEach((button) => {
    button.addEventListener('click', () => {
        wishlistItems.forEach((item) => {
            item.classList.remove("all");
        });

        button.classList.add("all");
    });
});

// 위시리스트 게시글 좋아요 클릭 이벤트
const likeIcon = document.querySelector(".post-like-icon");
const likeCount = document.querySelector(".post-like-count");

likeIcon.addEventListener("click", () => {
    if (likeIcon.classList.contains('liked')) {
        likeIcon.classList.remove("liked");
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
        likeIcon.classList.add("liked");
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
});

// 위시리스트 게시글 메뉴 열고 닫기 이벤트
const wishlistPostMenuButton = document.querySelector(".post-menu-container");
const wishlistPostMenu = document.querySelector(".post-menu-open");

wishlistPostMenuButton.addEventListener("click", () => {
    wishlistPostMenu.classList.toggle("hidden");
});

// 위시리스트 게시글 댓글 열고 닫기 이벤트
const commentOpen = document.querySelector(".comment-open-wrap");
const commentClose = document.querySelector(".comment-close-wrap");
const comment = document.querySelector(".comment-all-wrap");

commentOpen.addEventListener("click", () => {
    commentOpen.classList.add("hidden");
    commentClose.classList.remove("hidden");
    comment.classList.remove("hidden");
});

commentClose.addEventListener("click", () => {
    commentOpen.classList.remove("hidden");
    commentClose.classList.add("hidden");
    comment.classList.add("hidden");
});

// 위시리스트 댓글 메뉴 열고 닫기 이벤트
const wishlistCommentMenuButton = document.querySelector(".comment-menu");
const wishlistCommentMenu = document.querySelector(".comment-menu-open-wrap");

wishlistCommentMenuButton.addEventListener("click", () => {
    wishlistCommentMenu.classList.toggle("hidden");
});


// 댓글 수정 이벤트
const commentMenuOpenUpdate = document.getElementById("comment-menu-open-update");
const commentInputUpdate = document.querySelector(".comment-update-box-all-wrap");
const commentComment = document.querySelector(".comment-list-all-wrap");


commentMenuOpenUpdate.addEventListener("click", () => {
    commentInputUpdate.classList.remove("hidden");
    commentComment.classList.add("hidden");
    
});

const commentUploadFinish =document.getElementById("comment-update-upload");

commentUploadFinish.addEventListener("click", () => {
    commentInputUpdate.classList.add("hidden");
    commentComment.classList.remove("hidden");
});


// 위시리스트 생성 모달창
// const wishlistCreate = document.querySelector(".main-extra-create-wrap")

// 위시리스트 생성 모달창 - 미로그인 시
// const modalLogin = document.querySelector(".modal-login")
// const modalLoginClose = document.querySelector(".modal-divison-login-button-close")
// const modalLoginFinish = document.querySelector(".modal-divison-login-button")

// wishlistCreate.addEventListener("click", () => {
//     modalLogin.classList.remove("hidden");
// });

// modalLoginClose.addEventListener("click", () => {
//     modalLogin.classList.add("hidden");
// });

// modalLoginFinish.addEventListener("click", () => {
//     modalLogin.classList.add("hidden");
// });

// 위시리스트 생성 모달창 - 정상 로그인
const wishlistCreate = document.querySelector(".extra-create-button")

const modalCreateInput = document.querySelector(".modal-create")
const modalCreateClose = document.querySelector(".modal-create-back-botton")
const modalCreateFinish = document.querySelector(".modal-create-finsh-botton-wrap")


wishlistCreate.addEventListener("click", () => {
    modalCreateInput.classList.remove("hidden");
});

modalCreateClose.addEventListener("click", () => {
    modalCreateInput.classList.add("hidden");
});

modalCreateFinish.addEventListener("click", () => {
    modalCreateInput.classList.add("hidden");
});

// 위시리스트 게시글 수정 모달창
const postUpdateButton = document.getElementById("post-menu-open-update");
const modalPostUpdate = document.querySelector(".modal-update");
const modalPostUpdateClose = document.querySelector(".modal-update-back-botton");
const modalPostUpdateFinish = document.querySelector(".modal-update-finsh-botton");


postUpdateButton.addEventListener("click", () => {
    modalPostUpdate.classList.remove("hidden");
});

modalPostUpdateClose.addEventListener("click", () => {
    modalPostUpdate.classList.add("hidden");
});

modalPostUpdateFinish.addEventListener("click", () => {
    modalPostUpdate.classList.add("hidden");
});

// ****************************************************
// 태그 추가
const tag = document.querySelector(".modal-update-bottom-wrap .tag")
const tagInput = document.querySelector(".modal-update-tag .modal-update-tag-input")
tagInput.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        if(e.target.value) {
            const tagDiv = document.createElement("div")
            tagDiv.innerHTML = `<span>${e.target.value}</span>`;
            tag.appendChild(tagDiv)
            e.target.value = "";
            tagDiv.addEventListener("click", () => {
                // 취소
                tag.removeChild(tagDiv);
            })
        }
    }
})