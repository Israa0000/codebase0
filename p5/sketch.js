const vocales = "aeiou".split("")
const consonantes = "qwrtypsdfghjklñzxcvbnm".split("")
console.log(vocales, consonantes)

function crearPalabra(n_silabas){
    let palabra = ""
    for(let i = 0; i < n_silabas; i++){
        console.log(i)
        palabra += random(consonantes) + random(vocales)
    }

    return palabra
}


function setup() {
    createCanvas(400, 400);
    frameRate(1)
  }
  
  function draw() {
    background(220);
    const string_final = crearPalabra(random(5))
    text(string_final(12), 50, 50)
  }

//diferencia entre let y const es su mutabilidad
//const no cambia let si