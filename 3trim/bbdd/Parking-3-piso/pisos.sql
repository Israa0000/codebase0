CREATE TABLE IF NOT EXISTS pisos (
    id_piso INTEGER PRIMARY KEY AUTOINCREMENT, 
    plazas_por_tipo INT  
);


CREATE TABLE IF NOT EXISTS tipos_espacio (
    id_tipo_espacio INTEGER PRIMARY KEY AUTOINCREMENT, 
    tipo_espacio TEXT 
);


CREATE TABLE IF NOT EXISTS espacios_por_piso (
    id_piso_relacionado INTEGER,  
    id_tipo_espacio INTEGER, 
    cantidad INT,  
    FOREIGN KEY (id_piso_relacionado) REFERENCES pisos(id_piso), 
    FOREIGN KEY (id_tipo_espacio) REFERENCES tipos_espacio(id_tipo_espacio)  
);

-- tipos de espacio
INSERT INTO tipos_espacio (tipo_espacio) VALUES 
('Privada'),
('Minusválido'),
('Eléctrico'),
('Público');

INSERT INTO pisos (plazas_por_tipo) VALUES
(5),  -- Piso 1
(10), -- Piso 2
(20); -- Piso 3

-- distribución Piso 1
INSERT INTO espacios_por_piso (id_piso_relacionado, id_tipo_espacio, cantidad) VALUES
(1, 1, 5),  -- 5 Privadas
(1, 2, 5),  -- 5 Minusválidos 
(1, 3, 5),  -- 5 Eléctricos 
(1, 4, 5);  -- 5 Públicos 

-- distribución Piso 2
INSERT INTO espacios_por_piso (id_piso_relacionado, id_tipo_espacio, cantidad) VALUES
(2, 4, 10), -- 10 Públicos 
(2, 1, 10); -- 10 Privadas 

-- distribución Piso 3
INSERT INTO espacios_por_piso (id_piso_relacionado, id_tipo_espacio, cantidad) VALUES
(3, 4, 20); -- 20 Públicos

