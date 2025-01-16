fetch('https://dummyjson.com/recipes/1')//fetch devuelve una promesa
.then(res => res.json()) //que hago con esa promesa si se resuelve (quierp que la conviertas en un json)
.then(data => {
    console.log(data)

    //titulo
    const nombre = data.name //acceder a la lista y guardado
    const h1 =document.createElement("h1")
    h1.innerText = nombre
    document.body.appendChild(h1)
    
    //imagen
    const imagen = data.image
    const imgImagen = document.createElement("img")
    imgImagen.src = imagen 
    document.body.appendChild(imgImagen)

    //dificultad
    const dificultad = data.difficulty
    const p1 = document.createElement("p")
    p1.innerText = "Difficulty" + ":" + dificultad
    document.body.appendChild(p1)
    
    //ingredientes
    const ingredientes = data.ingredients
    const ulIngredientes = document.createElement("ul")
    //ulIngredientes.innerText = ingredientes  //no lo quiero asignar todo 
    //como texto dentro del <ul>
    //quiero crear un <li> para cada ingrediente dentro de ese <ul>
    document.body.appendChild(ulIngredientes)

    //crear la lista de ingredientes
    for (let i = 0; i < ingredientes.length; i++) {
        liIngredientes = document.createElement("li")
        liIngredientes.innerText = ingredientes[i]
        ulIngredientes.appendChild(liIngredientes)
        console.log(ingredientes[i])
      }
      
    //tiempo de preparacion
    const tiempoPrep = data.prepTimeMinutes
    const pTiempoPrep = document.createElement("p")
    pTiempoPrep.innerText = "Preparation time" + ": " + tiempoPrep + " min"
    document.body.appendChild(pTiempoPrep)

    //pasos
    const pasos = data.instructions
    const ulPasos = document.createElement("ul")
    document.body.appendChild(ulPasos)

    //lista de pasos
    for (let i = 0; i < pasos.length; i++){
        liPasos = document.createElement("li")
        liPasos.innerText = pasos[i]
        ulPasos.appendChild(liPasos)
    }

    //tiempo de coccion
    const tiempoCoccion = data.cookTimeMinutes
    const ptiempoCoccion = document.createElement("p")
    ptiempoCoccion.innerText = "cooking time" + ": " + tiempoCoccion
    document.body.appendChild(ptiempoCoccion)

    console.log(nombre) //comprobar lo q he guardado en la constante
})

function create(element,data,destination){
    const e = document.createElement(element)
    e.innetText = data
    dest_element = document.querySelector(destination)
    dest_element.appendChild(e)
}

create("p", "hola mundo", "body")
//es una peticion get 
//js hay q hacer siempre 2 promesas
