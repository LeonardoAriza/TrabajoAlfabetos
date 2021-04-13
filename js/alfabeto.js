//Variables
const inputAlfabeto1 = document.querySelector('#alfabeto1');
const inputAlfabeto2 = document.querySelector('#alfabeto2');
const btnAlfabeto = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#formulario');
const enlaceUnion = document.querySelector('#union');
const enlaceInter = document.querySelector('#interseccion');
const enlaceDiff = document.querySelector('#diferencia');
let valorInput1 = [];
let valorInput2 = [];
let entradas = [];

//Listeners
correrProceso();
function correrProceso(){

    formulario.addEventListener('submit', leerAlfabeto);
}

//Funciones
function leerAlfabeto(evento){
    evento.preventDefault();
    if(inputAlfabeto1.value === '' || inputAlfabeto2.value === ''){
       swal('Error','Un conjunto vacio no es un alfabeto', 'error');
        return false;
    }
    valorInput1 = inputAlfabeto1.value.split(",");
    valorInput2 = inputAlfabeto2.value.split(",");
    valorInput1 = valorInput1.map(el => el.trim());
    valorInput2 = valorInput2.map(el => el.trim());
    entradas = valorInput1.concat(valorInput2);
    mostrarAlfabeto();
}

function mostrarAlfabeto(){
        enlaceUnion.textContent = `{${mostrarUnion(entradas)}}`;
        enlaceInter.textContent = `{${mostrarInterseccion(entradas)}}`;
        enlaceDiff.textContent = `{${mostrarDiferencia(valorInput1,valorInput2)}}`;
}