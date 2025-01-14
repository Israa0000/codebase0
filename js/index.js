fetch('https://dummyjson.com/recipes/1')//fetch devuelve una promesa
.then(res => res.json()) //que hago con esa promesa si se resuelve (quierp que la conviertas en un json)
.then(data => {
    console.log(data)

    //titulo
    const nombre = data.name //acceder a la lista y guardado
    const h1 =document.createElement("h1")
    h1.innerText = nombre
    document.body.appendChild(h1)

    //dificultad
    const dificultad = data.difficulty
    const p1 = document.createElement("p")
    p1.innerText = dificultad
    document.body.appendChild(p1)
    
    //ingredientes
    const ingredientes = data.ingredients
    const ulIngredientes = document.createElement("ul")
    ulIngredientes.innerText = ingredientes
    document.body.appendChild(ulIngredientes)
    for (let i = 0; i < ingredientes.length; i++) {
        liIngredientes = document.createElement("li")
        console.log(ingredientes[i]) // Imprime los números del 0 al 4
      }
      
    console.log(ingredientes)
    
    //pasos
    const pasos = data.instructions
    const ulPasos = document.createElement("ul")
    ulPasos.innerText = pasos
    document.body.appendChild(ulPasos)

    //imagen

    //tiempo de preparacion
    //tiempo de coccion
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