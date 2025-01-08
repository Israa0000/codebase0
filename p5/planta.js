let tallo;
let hojas = [];
let angulo = 0;

function setup() {
  createCanvas(400, 400);
  tallo = new Tallo(width / 2, height); // Creamos el tallo en el fondo
}

function draw() {
  // Fondo que simula el cielo con un gradiente
  fondoCielo();

  // Dibujamos el tallo
  tallo.mostrar();
  tallo.crecer();

  // Generamos y dibujamos las hojas
  for (let i = 0; i < hojas.length; i++) {
    hojas[i].mostrar();
  }

  // Cada cierto tiempo, generamos una hoja nueva
  if (frameCount % 60 == 0) { // Cada 60 fotogramas
    hojas.push(new Hoja(tallo.x, tallo.y - tallo.largo)); // Hojas desde el final del tallo
  }
}

// Función para crear el fondo con un gradiente
function fondoCielo() {
  for (let i = 0; i < height; i++) {
    let c = lerpColor(color(135, 206, 235), color(255), map(i, 0, height, 0, 1)); // Azul de cielo a blanco
    stroke(c);
    line(0, i, width, i); // Crear el gradiente vertical
  }
}

// Clase para el tallo
class Tallo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.largo = 0;
    this.grosor = 10; // Hacemos el tallo más grueso
  }

  // Mostrar el tallo
  mostrar() {
    stroke(34, 139, 34); // Verde para el tallo
    strokeWeight(this.grosor); // Grosor del tallo
    line(this.x, this.y, this.x, this.y - this.largo); // Dibuja el tallo
  }

  // Crecer el tallo
  crecer() {
    if (this.largo < 300) { // Aumentamos el largo máximo del tallo
      this.largo += 1; // El tallo crece lentamente
    }
  }
}

// Clase para las hojas
class Hoja {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angulo = random(-PI / 4, PI / 4); // Ángulo aleatorio para la hoja
    this.largo = random(20, 40); // Longitud de la hoja aleatoria
    this.ancho = random(5, 10); // Ancho de la hoja aleatorio
  }

  // Mostrar la hoja
  mostrar() {
    push();
    translate(this.x, this.y);
    rotate(this.angulo); // Rotar según el ángulo de la hoja
    fill(34, 139, 34); // Color verde
    noStroke();
    ellipse(0, 0, this.largo, this.ancho); // Dibujar la hoja como un elipse
    pop();
  }
}
