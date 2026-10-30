CREATE TABLE productos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

INSERT INTO productos(nombre, precio) VALUES
('teclado', 20),
('raton', 15), 
('monitor 17', 250);