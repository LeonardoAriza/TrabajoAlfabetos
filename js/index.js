function mostrarUnion(entradas){ 
    //       entradas = [a,b,c,b,c,d]  0          a.indexOf(a)= 0              0                                                                            
    const filtroUnion = ((elemento,indice) => entradas.indexOf(elemento) === indice);
    const union = entradas.filter(filtroUnion);
    // union = a
    return union;
}

function mostrarInterseccion(alfabeto){
    const filtroInter = ((el,index) => alfabeto.indexOf(el) !== index);
    const interseccion = alfabeto.filter(filtroInter);
    return interseccion;
}

function mostrarDiferencia(alfabeto,b){
    const filtroDiff = ((el) => !b.includes(el));
    const diferencia = alfabeto.filter(filtroDiff);
    return diferencia;
}

function concatenacion(valor1, valor2){
    let concatenacion = [];
    if(valor2[0] === '' || valor1[0] === ''){
        return concatenacion;
    }else{
    for(let i=0; i<valor1.length; i++){
        let a = valor1[i];
        for(let j=0; j<valor2.length; j++){
            let b = valor2[j];
            (a === 'λ' ? concatenacion.push(b) : b === 'λ' ? concatenacion.push(a) : concatenacion.push(`${a + b}`) );
        }
    }
    return concatenacion;
    }
}

function fPotencia(objIngre ,nPotencia) {
    let lgPotencia = [...objIngre];
    
    if(nPotencia === -1){
        return lgPotencia = [];
    }
    for (let i = 0; i < nPotencia; i++) {
      lgPotencia = concatenacion(lgPotencia, objIngre);
    }
    console.log(lgPotencia);
    return lgPotencia;
}

function inversoString(valor){
    let inverso = [...valor];
    inverso.reverse();
    return inverso;
}

let inversoArray = (valor) => {
    let objetoInver = valor.map(function(el){
        return el.split('').reverse().join('');
    })
    return objetoInver;
}

let cardinalidad = (valor) => (valor[0]==='' ? 0 : valor.length);