function seriesPares(){
    var serie="Resultado: ";
    var i=2;
    while(i<=100){
        serie+=`${i} - `;
        document.getElementById("resultado").innerHTML=serie;
        i=i+2;
    }
}
function seriesInpares(){
    var serie="Resultado: ";
    var i=1;
    while(i<=12){
        serie+=`${i} - `;
        document.getElementById("resultado1").innerHTML=serie;
        i=i+2;
    }
}
function seriesnumeros(){
    var serie="Resultado: ";
    var i=1;
    while(i<=12){
        serie+=`${i} - `;
        document.getElementById("resultado2").innerHTML=serie;
        i=i+1;
    }
    
}
function hola(){
   // const patron=/hola/;
    const patron= /^[0-9]+$/;
    let dato;
    do {
        
        dato=prompt(`Ingresa el valor: `);
    } while (!patron.test(dato));
    alert ("Expresion valida");
}
//Creando funciones
function suma(a,b){
    resultado=a+b;
    return resultado;
}
function resta(a,b){
    resultado=a-b;
    return resultado;
}
function multiplicacion(a,b){
    resultado=a*b;
    return resultado;
}
function division(a,b){
    resultado=a/b;
    return resultado;
}
function potencia(a,b){
    resultado=a**b;
    return resultado;
}
function residuo(a,b){
    resultado=a%b;
    return resultado;
}
//llamada a funcion
potencia(24,5);
document.getElementById("resultado").innerHTML=resultado;
console.log(resultado);