-- PRODUCTOS DE PRUEBA
INSERT INTO productos (nombre, descripcion, precio, imagen, stock) VALUES
('Sobre Mega Evolution', 'Sobre de expansión mega evolution.', 5500, 'pokemon.jpg', 50),
('Legendary 5D''s Yu-Gi-Oh!', '3 mazos conmemorativos de 5D''s.', 35000, 'yugioh.png', 20),
('Sobre One Piece op13', 'Sobre de expansión op13 One Piece.', 6000, 'op.png', 40),
('Sleeves standar', 'Fundas protectoras para cartas.', 3500, 'sleeves.jpg', 100);

-- USUARIOS
INSERT INTO usuarios (nombre, email) VALUES
('Carlos Sandoval', 'carlos@gmail.com'),
('Milovan Charnock', 'milovan@gmail.com'),
('Andrea Orellana', 'oreo@hotmail.com');

-- VENTAS
INSERT INTO ventas (usuario_id) VALUES
(1),
(2),
(3);

-- DETALLE DE VENTAS
INSERT INTO venta_detalle (venta_id, producto_id, cantidad, precio_unitario) VALUES
(1, 1, 2, 5500),
(1, 4, 1, 3500),
(2, 2, 1, 35000),
(3, 3, 3, 6000);