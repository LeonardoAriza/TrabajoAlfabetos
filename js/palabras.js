const inputPalabra = document.querySelector('#palabra');
const btnLenguaje = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#formulario');
const enlaceInver = document.querySelector('#inverso');
const enlaceCardi = document.querySelector('#cardinalidad');

cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerPalabra);
}

function leerPalabra(e){
    e.preventDefault();
    valorInput = inputPalabra.value;
    mostrarPalabra();
}

function mostrarPalabra(){
        enlaceInver.textContent = inversoString(valorInput).join("").toLowerCase();
        enlaceCardi.textContent = cardinalidad(valorInput);
}