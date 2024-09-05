//First page
const diaSemana = document.getElementById("day-week");
const diaMesAno = document.getElementById("day-month-year");
const horaMinSec = document.getElementById("hour-min-sec");
const clockInButton = document.getElementById("clock-in");
const clockInHistoryButton = document.getElementById("clock-in-history");
const arrayDayWeek = new Array("Domingo", "Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado")
diaMesAno.textContent = completeDate();
diaSemana.textContent = dayWeek();
setInterval(updateTime,1000);
clockInButton.addEventListener("click",()=>{dialogClockIn.showModal();});

//Dialog
const dialogClockIn = document.getElementById("dialog-clock-in");
const dialogCloseButton = document.getElementById("close");
const startButton = document.getElementById("start");
const dialogDate = document.getElementById("dialog-date");
const dialogTime = document.getElementById("dialog-time");
startButton.addEventListener("click",()=>{});
dialogTime.textContent = "Data: " + completeDate();
setInterval(()=>{dialogDate.textContent="Hora: " + completeTime();},1000);
dialogCloseButton.addEventListener("click",()=>{dialogClockIn.close();});

//Functions
function updateTime(){
    horaMinSec.textContent = completeTime();
}

function dayWeek(){
    const date = new Date();
    return arrayDayWeek[date.getDay()]
}

function completeDate(){
    const date = new Date();
    return addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + date.getFullYear()
}

function completeTime(){
    const date = new Date();
    return addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds())
}

function addZero(i){
    if (i<10) {i = "0" + i}
    return i
}