fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(data => {
    console.log(data); 
//en este fetch estan todas las recetas, asi que 
//primero hay que seleccionar una

// Receta 
const receta = data.recipes[7]
console.log(receta)

// titulo
const nombre = receta.name
const elemNombre = document.createElement("h1")
elemNombre.innerText = nombre
document.body.appendChild(elemNombre)

//imagen 
const imagen = receta.image
const elemImagen = document.createElement("img")
elemImagen.src = imagen
document.body.appendChild(elemImagen)

//ingredientes 
const ingredientes = receta.ingredients
const tituloIng = document.createElement("h2")
tituloIng.innerText = "Ingredients"
document.body.appendChild(tituloIng)
const elemIngredientes = document.createElement("ul")

 //lista de ingredientes
for (let i = 0; i < ingredientes.length; i++) {
    liIngredientes = document.createElement("li")
    liIngredientes.innerText = ingredientes[i]
    elemIngredientes.appendChild(liIngredientes)
  }
document.body.appendChild(elemIngredientes)
  
//tiempo de preparacion
const tiempoPrep = receta.prepTimeMinutes
const elemTiempoPrep = document.createElement("p")
elemTiempoPrep.innerText = "Preparation time: " + tiempoPrep + " min" 
document.body.appendChild(elemTiempoPrep)

//instrucciones
const instrucciones = receta.instructions

    //titulo de instrucciones
    const titIns = document.createElement("h2")
    titIns.innerText = "Intructions"
    document.body.appendChild(titIns)

const elemInstrucciones = document.createElement("ol")
document.body.appendChild(elemInstrucciones)

//lista de instrucciones
for (let i = 0; i < instrucciones.length; i++) {
    liInstrucciones = document.createElement("li")
    liInstrucciones.innerText = instrucciones[i]
    elemInstrucciones.appendChild(liInstrucciones)
  }

//tiempo de coccion
const tiempoCoccion = receta.cookTimeMinutes
const elemTiempoCocc = document.createElement("p")
elemTiempoCocc.innerText = "Cooking Time: " + tiempoCoccion + " min"
document.body.appendChild(elemTiempoCocc)
})