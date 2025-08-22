document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;


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
        html.classList.add("grayscale");
        console.log(localStorage.getItem("grayscale"));
    }

    toggleGrayscaleButton.addEventListener("click", () => {
        html.classList.toggle("grayscale");

        if (html.classList.contains("grayscale")) {
            localStorage.setItem("grayscale", "on");
            console.log("Grayscale on");
        } else {
            localStorage.setItem("grayscale", "off");
            console.log("Grayscale off");
        }
    });
});
