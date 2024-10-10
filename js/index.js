const arrayDayWeek = new Array("Domingo", "Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado")
navigator.geolocation.getCurrentPosition((position)=>{console.log(position.coords.latitude); console.log(position.coords.longitude);})
let proxPonto = {
    "shift-begin": "lunch",
    "lunch": "return-from-lunch",
    "return-from-lunch": "shift-ends",
    "shift-ends": "shift-begin"
}
//teste
//First page
const diaSemana = document.getElementById("day-week");
const diaMesAno = document.getElementById("day-month-year");
const horaMinSec = document.getElementById("hour-min-sec");
const clockInButton = document.getElementById("clock-in");
const clockInHistoryButton = document.getElementById("clock-in-history");
const selectClockinType = document.getElementById("select-clockin-types");

diaMesAno.textContent = completeDate();
diaSemana.textContent = dayWeek();
updateTime();
setInterval(updateTime,1000);
clockInButton.addEventListener("click",()=>{
    let lastClockInType = localStorage.getItem("lastClockInType");
    selectClockinType.value = proxPonto[lastClockInType];
    dialogClockIn.showModal();
});

//Dialog
const dialogClockIn = document.getElementById("dialog-clock-in");
const dialogCloseButton = document.getElementById("dialog-close");
const dialogDate = document.getElementById("dialog-date");
const dialogTime = document.getElementById("dialog-time");
const dialogConfirmButton = document.getElementById("dialog-confirm-btn");
dialogConfirmButton.addEventListener("click",()=>{
    let clockIn = {
        "data": completeDate(),
        "time": completeTime(),
        "type": selectClockinType.value,
        "id": 1,
    }

    saveReportLocalStorage(clockIn)
    localStorage.setItem("lastClockInType", document.getElementById("select-clockin-types").value)
    dialogClockIn.close();
})


dialogDate.textContent = "Data: " + completeDate();
dialogTime.textContent="Hora: " + completeTime();
setInterval(()=>{dialogTime.textContent="Hora: " + completeTime();},1000);
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

function getLastId(){
    return localStorage.getItem(String(localStorage.length));
}

function restoreClockInLocalStorage() {
    let allClockIn = localStorage.getItem("report");

    if(!allClockIn) {
        return [];
    }

    return JSON.parse(allClockIn);
}

function saveReportLocalStorage(clockIn) {
    let allClockIn = restoreClockInLocalStorage();
    
    allClockIn.push(clockIn);
    // 1 - recuperar os registros anteriores
    // 2 - adicionar o novo registro (ponto) no final do array de registros

    localStorage.setItem("report", JSON.stringify(allClockIn));
}