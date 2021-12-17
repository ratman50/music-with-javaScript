const audio=document.querySelector(".music__audio");
const play=document.querySelector(".music__button-play");
const pause=document.querySelector(".music__button-pause")
console.log(pause)
play.addEventListener("click",()=>audio.play());
pause.addEventListener("click",()=>audio.pause())
