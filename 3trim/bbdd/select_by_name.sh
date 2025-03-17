sqlite3 mediciones.db "SELECT id FROM pacientes WHERE nombre = 'PEPE'"
squilte3 mediciones.db "SELECT * FROM mediciones WHERE id_paciente = 
(SELECT id FROM pacientes WHERE nombre = 'Pepe')"