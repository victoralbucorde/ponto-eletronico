const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSec = document.getElementById("hora-min-sec");
const arrayDayWeek = new Array("Domingo", "Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado")


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

diaMesAno.textContent = completeDate();
horaMinSec.textContent = completeTime();
diaSemana.textContent = dayWeek();