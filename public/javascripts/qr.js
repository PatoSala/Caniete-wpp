window.onabort("load", () => {
    let submitButton = document.querySelector(".submitButton");
    let spinner = document.querySelector(".spinnerContainer");

    submitButton.addEventListener("click", (event) => {
        spinner.style.display = "flex";
    });
});