const gallery = document.querySelector(".work-row");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const scrollAmount = 700;

nextBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });

    setTimeout(() => {
        const halfway = gallery.scrollWidth / 2;

        if (gallery.scrollLeft >= halfway) {
            gallery.scrollLeft -= halfway;
        }
    }, 400);
});

prevBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });

    setTimeout(() => {
        const halfway = gallery.scrollWidth / 2;

        if (gallery.scrollLeft <= 0) {
            gallery.scrollLeft += halfway;
        }
    }, 400);
});

