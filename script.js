document.addEventListener("click", function(e) {
    
    const sound = new Audio("sounds/click1.mp3");
    sound.volume = 0.5;
    sound.play();
});

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("mainNavigation");

    if (!menuToggle || !navigation) {
        return;
    }


    /* =====================================================
       OPEN / CLOSE MOBILE MENU
    ===================================================== */

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });


    /* =====================================================
       CLOSE MENU AFTER CLICKING A NAVIGATION LINK
    ===================================================== */

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

});
