const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getDate()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 처음시작시 한번 호출
setInterval(getClock, 1000);    //1초에 한번 interval호출
