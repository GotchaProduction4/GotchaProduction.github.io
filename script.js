document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        const sound = document.getElementById("clickSound");

        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    }
});
