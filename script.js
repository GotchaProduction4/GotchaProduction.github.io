document.addEventListener("click", function(e) {
    const sound = new Audio("sounds/click1.mp3");
    sound.volume = 0.5;
    sound.play();
});

document.addEventListener("click", function(e) {
    let sound = document.getElementById("clickSound");
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
});
