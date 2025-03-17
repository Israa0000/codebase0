function saludo(nombre, f){
    let resultado = "Hola " + nombre;
    resultado_final = f(resultado);
    return resultado_final;
}

function exclamaciones(saludo){
    return saludo +"!!!"
}

function preguntar(saludo){
    return saludo + ", que tal estas?"
}

console.log(saludo("Mundo", preguntar));

// funciones anonimas/ funciones flecha
const exclamaciones = (saludo) => saludo +"!!!"
const exclamaciones = (saludo) => {
    return saludo + "!!!"
}
console.log(saludo("Mundo", (saludo) => saludo +"¿Como estas?"));
