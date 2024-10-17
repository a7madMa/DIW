function addLike(button) {
    let likeCount = button.querySelector('.like-count');
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
}
