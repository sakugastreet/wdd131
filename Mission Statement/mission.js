const select = document.body.querySelector("select");



select.addEventListener("change", function () {
    // Set the class of <body> based on selected value
    if (select.value == "dark") {
        document.body.classList.add("dark");
        document.body.querySelector("img").src = "byui-logo_white.png";
    }
    else {
        document.body.classList.remove("dark");
        document.body.querySelector("img").src = "byui-logo_blue.webp";

    }
    

  });