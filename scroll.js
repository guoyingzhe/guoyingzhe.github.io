document.addEventListener("DOMContentLoaded", function () {
    const teamList = document.querySelector('.team-list-ar ul');
    let scrollAmount = 0;

    function scrollImages() {
        scrollAmount += 220; // 设置滚动距离，根据需要调整
        teamList.style.transform = 'translateX(' + -scrollAmount + 'px)';

        // 判断是否到达最后一张图片，如果是则回到起始位置
        if (scrollAmount >= teamList.scrollWidth - 600) {
            scrollAmount = 0;
        }
    }

    setInterval(scrollImages, 2000); // 设置滚动间隔，根据需要调整
});