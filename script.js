document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        let sound = document.getElementById("clickSound");
        sound.currentTime = 0;
        sound.play();
    }
});
