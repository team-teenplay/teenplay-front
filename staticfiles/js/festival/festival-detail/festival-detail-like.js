const likeButton = document.getElementById("likeButton");
const likeStatus = document.querySelector(".unlike-status");
const unlikeStatus = document.querySelector(".like-status");

likeButton.addEventListener("click", function () {
    if (likeStatus.style.display === "none") {
        likeStatus.style.display = "inline-block";
        unlikeStatus.style.display = "none";
    } else {
        likeStatus.style.display = "none";
        unlikeStatus.style.display = "inline-block";
    }
});
