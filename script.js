window.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector(".gallery");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 1000;
    });

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 1000;
    });

    function displayGallery() {
        const items = document.querySelectorAll('.gallery-item');
        const containerWidth = scrollContainer.offsetWidth;
        const itemsPerPage = Math.max(1, Math.floor(containerWidth / 1000));

        items.forEach(item => item.style.display = 'none');

        let currentPage = Math.floor(scrollContainer.scrollLeft / 1000);

        for (let i = currentPage * itemsPerPage; i < (currentPage + 1) * itemsPerPage; i++) {
            if (items[i]) items[i].style.display = 'block';
        }
    }

    displayGallery();
    scrollContainer.addEventListener('scroll', displayGallery);
});
