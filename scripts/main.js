document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", (event) => { })

    onscroll = (event) => {
        let subNavbars = document.querySelectorAll(".subNavbar");

        if (window.scrollY > 320) {
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
    }
})
