const squlite3 = require('better-sqlite3');

const db = new squlite3('database.db')

const respuesta = db.prepare('SELECT * FROM plazas').all();

console.log(respuesta)

// hola mundo con express(conseguir servidor de express que devuelva un hola mundo)
// endpoint /plazas que devuelva el resltado de  
// const respuesta = db.prepare('SELECT * FROM plazas').all();