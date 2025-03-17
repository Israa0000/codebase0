# normalizacion bbdd
## Es el proceso de organizar los datos de manera eficiente para reducir la redundancia( datios repetidos) y mejorar la integridad de la base de datos. El objetivo de la normalizacion es estructurar tablas de manera que sean consistentes, evitando errores.

### 1FN
- Requiere que la tabla no tenga datos repetidos  (los datos deben de ser atomicos)
- No puede haber columnas con valores multiples o listas, cada valor en una columna debe de ser distinto
- Cada fila debe de ser única, y se debe identificar mediante una primary key

### 2FN
- Cumple con la 1FN
- Se eliminan las dependencias parciales, lo que significa que todas las columnas no clave deben de depender completamente de la clave primaria (si la clave primaria es compuesta, ninguna columna debe depender de una parte de esa clave)

### 3FN
- Cumple con la 2FN
- No puede haber dependencias transitativas, es decir, ninguna columna no clave debe depender de otra columna no clave. Todas las dependencias deben ser entre las claves primarias y las columnas no clave

### 4FN
- Cumple con la 3FN
- Elimina dependencias multivaluadas, es decir, cuando una columna 

sqlite3 mediciones.db "SELECT id FROM pacientes WHERE nombre = 'PEPE'"
squilte3 mediciones.db "SELECT * FROM mediciones WHERE id_paciente = (SELECT id FROM pacientes WHERE nombre = 'Pepe')"