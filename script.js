document.addEventListener("click", function(e) {
    
    const sound = new Audio("sounds/click1.mp3");
    sound.volume = 0.5;
    sound.play();
});

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("mainNavigation");

    if (!menuToggle || !navigation) {
        console.log("Mobile menu elements not found.");
        return;
    }

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.innerHTML = isOpen ? "✕" : "☰";
    });


    /* CLOSE MENU WHEN A LINK IS CLICKED */

    const navLinks = navigation.querySelectorAll(".nav-btn");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML = "☰";
        });

    });


    /* CLOSE MENU WHEN CLICKING OUTSIDE */

    document.addEventListener("click", function (event) {

        if (
            navigation.classList.contains("active") &&
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML = "☰";
        }

    });

});
