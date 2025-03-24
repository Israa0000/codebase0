CREATE TABLE IF NOT EXISTS plazas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    piso INTEGER NOT NULL,
    tipo TEXT NOT NULL,
    estado TEXT NOT NULL,
    cantidad INTEGER NOT NULL,
    CHECK (tipo IN ('publico', 'privado', 'discapacitado', 'coche electrico')),
    CHECK (estado IN ('disponible', 'ocupado'))
);

-- Piso 1
INSERT INTO plazas (piso, tipo, estado, cantidad)
VALUES
(1, 'privado', 'disponible', 5),
(1, 'discapacitado', 'disponible', 5),
(1, 'coche electrico', 'disponible', 5),
(1, 'publico', 'disponible', 5);

-- Piso 2
INSERT INTO plazas (piso, tipo, estado, cantidad)
VALUES
(2, 'publico', 'disponible', 10),
(2, 'privado', 'disponible', 10);

-- Piso 3
INSERT INTO plazas (piso, tipo, estado, cantidad)
VALUES
(3, 'publico', 'disponible', 20);
