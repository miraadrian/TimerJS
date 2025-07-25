function criaHoradosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

iniciar.addEventListener('click', function(evento){
    clearInterval(timer);
    relogio.style.color = 'black';
    iniciaRelogio();

})


zerar.addEventListener('click', function(evento){
   zeraRelogio();
})

pausar.addEventListener('click', function(evento){
    pausaRelogio();
})

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoradosSegundos(segundos);
    }, 1000)
}

function pausaRelogio(){
    clearInterval(timer);
    relogio.style.color = 'red';
}

function zeraRelogio(){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    timer = 0;
    relogio.style.color = 'black';
};


AOS.init({
    disable: 'mobile', // ou true
    startEvent: 'DOMContentLoaded', // ou configura para não animar na entrada
    once: false,
    duration: 0 // ou remove AOS completamente
  });
