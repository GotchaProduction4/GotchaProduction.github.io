document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        const sound = new Audio("sounds/click1.mp3");
        sound.play();
    }
});
