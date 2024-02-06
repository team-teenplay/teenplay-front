// 태그 검색 이벤트
const inputTagsSearch = document.querySelector(".tag-search-text");
const inputTagsSearchBorder = document.querySelector(".tag-search");
const inputTagsSearchIcon = document.querySelector(".tag-search-icon");

inputTagsSearch.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        inputTagsSearch.classList.add("red")
        inputTagsSearchIcon.style = "color: #CE201B";
        inputTagsSearchBorder.style = "border-color: #CE201B";
        return;
    } else {
        inputTagsSearch.classList.remove("red")
        inputTagsSearchIcon.style = "color: #878D91";
        inputTagsSearchBorder.style = "border-color: #E1E4E6";
    }
});


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

// 위시리스트 메뉴 닫기 이벤트
document.addEventListener("click", (e) => {
    if (!wishlistPostMenuButton.contains(e.target) && !wishlistPostMenu.contains(e.target)) {
        wishlistPostMenu.classList.add("hidden");
    }
});

// const mainScreen = document.querySelector(".main");

// mainScreen.addEventListener("click", (e) => {
//     if (wishlistPostMenu.has(e.target).length === 0) {
//         wishlistPostMenu.classList.toggle("hidden");
//     }
// })


// 위시리스트 게시글 수정 모달창
const postUpdateButton = document.getElementById("post-menu-open-update");
const modalPostUpdate = document.querySelector(".post-update");
const modalPostUpdateClose = document.querySelector(".update-close-container");
const modalPostUpdateFinish = document.querySelector(".update-finish-botton");


postUpdateButton.addEventListener("click", () => {
    modalPostUpdate.classList.remove("hidden");
});

modalPostUpdateClose.addEventListener("click", () => {
    modalPostUpdate.classList.add("hidden");
});

modalPostUpdateFinish.addEventListener("click", () => {
    modalPostUpdate.classList.add("hidden");
});

// 위시리스트 게시글 수정 모달창 닫기 이벤트
const postUpdateWrap = document.querySelector(".post-update-wrap");

document.addEventListener("click", (e) => {
    if (!postUpdateButton.contains(e.target) && !postUpdateWrap.contains(e.target)) {
        modalPostUpdate.classList.add("hidden");
    }
});

// 위시리스트 게시글 타이틀 입력 이벤트
const updatePostTitle = document.querySelector(".update-category-input");
const updatePostFinish = document.querySelector(".update-finish-botton");

updatePostFinish.addEventListener("click", () => {
    if (!updatePostTitle.value) {
        updatePostTitle.classList.add("red");
        return;
    } else {
        updatePostTitle.classList.remove("red");
    }
});

// 위시리스트 게시글 태그 수정 이벤트
const tagInput = document.querySelector(".update-tags-input-container .update-tags-input");
const tagWrap = document.querySelector(".update-tags-wrap");
const tag = document.querySelector(".update-tags-wrap .tag");
const tagError = document.querySelector(".tag-error-text");

tagInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        const tags = document.querySelectorAll(".update-tags-wrap .tag-list");

        if (e.target.value.length <= 10 && tags.length <= 5) {
            if (e.target.value) {
                const tagDiv = document.createElement("div");
                tagDiv.classList.add("tag-list");
                tagDiv.innerHTML = `<span>${e.target.value} ×</span>`;
                tag.appendChild(tagDiv);
                e.target.value = "";
                tagError.classList.add("hidden")

                tagDiv.addEventListener("click", () => {
                    // 취소
                    tag.removeChild(tagDiv);
                    tagError.classList.add("hidden")
                });
            } 
        } else {
            tagError.classList.remove("hidden")
        }
    }
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

// 위시리스트 댓글 메뉴 닫기 이벤트
document.addEventListener("click", (e) => {
    if (!wishlistCommentMenuButton.contains(e.target) && !wishlistCommentMenu.contains(e.target)) {
        wishlistCommentMenu.classList.add("hidden");
    }
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

const modalCreateInput = document.querySelector(".post-create")
const modalCreateClose = document.querySelector(".create-close-container")
const modalCreateFinish = document.querySelector(".create-finish-container")


wishlistCreate.addEventListener("click", () => {
    modalCreateInput.classList.remove("hidden");
});

modalCreateClose.addEventListener("click", () => {
    modalCreateInput.classList.add("hidden");
});

modalCreateFinish.addEventListener("click", () => {
    modalCreateInput.classList.add("hidden");
});

// 위시리스트 생성 모달창 닫기 이벤트
const postCreateWrap = document.querySelector(".post-create-wrap");

document.addEventListener("click", (e) => {
    if (!wishlistCreate.contains(e.target) && !postCreateWrap.contains(e.target)) {
        modalCreateInput.classList.add("hidden");
    }
});

// 위시리스트 게시글 태그 추가 이벤트
const createTagInput = document.querySelector(".create-tags-input-container .create-tags-input");
const createTagWrap = document.querySelector(".create-tags-wrap");
const createTag = document.querySelector(".create-tags-wrap .create-tag");
const createTagError = document.querySelector(".create-tag-error");

createTagInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        const createTags = document.querySelectorAll(".create-tags-wrap .create-tag-list");

        if (e.target.value.length <= 10 && createTags.length <= 5) {
            if (e.target.value) {
                const createTagDiv = document.createElement("div");
                createTagDiv.classList.add("create-tag-list");
                createTagDiv.innerHTML = `<span>${e.target.value} ×</span>`;
                createTag.appendChild(createTagDiv);
                e.target.value = "";
                createTagError.classList.add("hidden")

                createTagDiv.addEventListener("click", () => {
                    // 취소
                    createTag.removeChild(createTagDiv);
                    createTagError.classList.add("hidden")
                });
            } 
        } else {
            createTagError.classList.remove("hidden")
        }
    }
});




// ****************************************************
// 태그 추가
// const tag = document.querySelector(".update-tags-wrap .tag")
// const tagInput = document.querySelector(".update-tags-input-container .update-tags-input")
// tagInput.addEventListener("keyup", (e) => {
//     if(e.keyCode === 13) {
//         if(e.target.value) {
//             const tagDiv = document.createElement("div")
//             tagDiv.innerHTML = `<span>${e.target.value}</span>`;
//             tag.appendChild(tagDiv)
//             e.target.value = "";
//             tagDiv.addEventListener("click", () => {
//                 // 취소
//                 tag.removeChild(tagDiv);
//             })
//         }
//     }
// })
