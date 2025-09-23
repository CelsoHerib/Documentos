const expandBtn = document.querySelector(".expand-btn");

let activeIndex;

expandBtn.addEventListener("click", () => {
    document.body.classList.toggle("collapsed");
});

const current = window.location.href;
const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
    elem.addEventListener("click", () => {
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
            if (link.href === hrefLinkClick) {
                link.classList.add("active");
            }
            else {
                link.classList.remove("active");
            }
        });
    });
});