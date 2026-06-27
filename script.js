document.addEventListener("click", function(e) {
    const sound = document.getElementById("clickSound");

    if (!sound) return;

    // play sound for ALL clickable elements
    if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A"
    ) {
        sound.currentTime = 0;
        sound.play();
    }
});
