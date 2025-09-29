document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    navbar.addEventListener("mouseenter", (event) => {
        let navbar = document.querySelector(".navbar");
        let subNavbars = document.querySelectorAll(".subNavbar");

        console.log(navbar.getBoundingClientRect().y);

        if (navbar.getBoundingClientRect().y < 320) {
            subNavbars.forEach(subNavbar => {
                subNavbar.classList.remove("subNavbarTop");
                subNavbar.classList.add("subNavbarBottom");
            });
        } else {
            subNavbars.forEach(subNavbar => {
                subNavbar.classList.remove("subNavbarBottom");
                subNavbar.classList.add("subNavbarTop");
            });
        }
    });
})
