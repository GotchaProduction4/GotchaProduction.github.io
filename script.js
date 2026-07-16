const modal=document.getElementById("contactModal");

const btn=document.getElementById("contactBtn");

const close=document.querySelector(".close");

btn.onclick=function(e){

e.preventDefault();

modal.style.display="flex";

}

close.onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target===modal){

modal.style.display="none";

}

}document.addEventListener("click", function(e) {
    const sound = new Audio("sounds/click1.mp3");
    sound.volume = 0.5;
    sound.play();
});
