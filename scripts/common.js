document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;

    // ikony

    feather.replace();

    // rozwijanie navbaru

    const toggle = document.querySelector(".menuToggle");
    const navbarList = document.querySelector(".navbarList");

    toggle.addEventListener("click", () => {
        navbarList.classList.toggle("open");
    });

    document.querySelectorAll(".navItem").forEach(item => {
        item.addEventListener("click", e => {
            if (window.matchMedia("(pointer: coarse)").matches) {
                const parentLi = item.parentElement;

                document.querySelectorAll(".navbarList li").forEach(li => {
                    if (li !== parentLi) li.classList.remove("active");
                });

                parentLi.classList.toggle("active");
            }
        });
    });

    // wielkość tekstu

    let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;
    html.style.fontSize = fontSize + "px";

    const enlargeTextButton = document.querySelector(".enlargeText");

    enlargeTextButton.addEventListener("click", () => {
        if (localStorage.getItem("fontSize") < 25) {
            fontSize += 2;
            html.style.fontSize = fontSize + "px";
            localStorage.setItem("fontSize", fontSize);
        }
    });

    const resetTextButton = document.querySelector(".resetText");

    resetTextButton.addEventListener("click", () => {
        fontSize = 16;
        html.style.fontSize = fontSize + "px";
        localStorage.setItem("fontSize", fontSize);
    });

    const reduceTextButton = document.querySelector(".reduceText");

    reduceTextButton.addEventListener("click", () => {
        if (localStorage.getItem("fontSize") > 10) {
            fontSize = Math.max(10, fontSize - 2);
            html.style.fontSize = fontSize + "px";
            localStorage.setItem("fontSize", fontSize);
        }
    });

    // skala szarości

    const toggleGrayscaleButton = document.querySelector(".toggleGrayscale");

    if (localStorage.getItem("grayscale") === "on") {
        toggleGrayscale();
        console.log(localStorage.getItem("grayscale"));
    }

    toggleGrayscaleButton.addEventListener("click", () => {
        toggleGrayscale();

        if (html.classList.contains("grayscale")) {
            localStorage.setItem("grayscale", "on");
        } else {
            localStorage.setItem("grayscale", "off");
        }
    });

    function toggleGrayscale() {
        html.classList.toggle("grayscale");
    }

    // wysoki kontrast

    const toggleContrastButton = document.querySelector(".toggleContrast");
    const accessibility = document.querySelector(".accessibility")
    const accessibilityChildren = accessibility.querySelectorAll('*');
    const navbar = document.querySelector(".navbar")
    const navbarChildren = navbar.querySelectorAll('*');
    const main = document.querySelector("main")
    const mainChildren = main.querySelectorAll('*');
    const footer = document.querySelector("footer")
    const footerChildren = footer.querySelectorAll('*');

    if (localStorage.getItem("contrast") === "on") {
        toggleContrast();
    }

    toggleContrastButton.addEventListener("click", () => {
        toggleContrast();

        if (accessibility.classList.contains("contrastWhite")) {
            localStorage.setItem("contrast", "on");
        } else {
            localStorage.setItem("contrast", "off");
        }
    });

    function toggleContrast() {
        accessibility.classList.toggle("contrastWhite");
        accessibilityChildren.forEach(child => {
            child.classList.toggle("contrastWhite");
        });
        navbar.classList.toggle("contrastYellow");
        navbarChildren.forEach(child => {
            child.classList.toggle("contrastYellow");
        });
        main.classList.toggle("contrastWhite");
        mainChildren.forEach(child => {
            child.classList.toggle("contrastWhite");
        });
        footer.classList.toggle("contrastWhite");
        footerChildren.forEach(child => {
            child.classList.toggle("contrastWhite");
        });
    }
});
