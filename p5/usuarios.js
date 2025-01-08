class Usuario{
    constructor(nombre, edad){
      this.nombre = nombre
      this.edad = edad
    }
    saludo(){
      console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
  }
  
  const usuario1 = new Usuario("Mario", 18)
  const usuario2 = new Usuario("Juan", 32)
  const usuario3 = new Usuario("Maria", 20)
  
  usuario1.saludo()
  usuario2.saludo()
  usuario3.saludo()