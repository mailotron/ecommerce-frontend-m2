-- 1. Catálogo completo
SELECT id, nombre, precio, stock
FROM productos;

-- 2. Productos con stock bajo
SELECT nombre, stock
FROM productos
WHERE stock <= 5;

-- 3. Total vendido por producto
SELECT p.nombre,
       SUM(d.cantidad * d.precio_unitario) AS total_generado
FROM venta_detalle d
JOIN productos p ON d.producto_id = p.id
GROUP BY p.id;

-- 4. Ventas por usuario
SELECT u.nombre,
       SUM(d.cantidad * d.precio_unitario) AS total_gastado
FROM usuarios u
JOIN ventas v ON u.id = v.usuario_id
JOIN venta_detalle d ON d.venta_id = v.id
GROUP BY u.id;

-- 5. Productos más vendidos (top)
SELECT p.nombre,
       SUM(d.cantidad) AS unidades_vendidas
FROM venta_detalle d
JOIN productos p ON p.id = d.producto_id
GROUP BY p.id
ORDER BY unidades_vendidas DESC;

-- Transacción demostrativa
-- Registrar una venta con control de stock
BEGIN;

-- Se crea venta para un usuario
INSERT INTO ventas (usuario_id) VALUES (2);

-- Guardamos ID creado (simulación)
SET @venta_id = LAST_INSERT_ID();

-- Agregar producto 3 cantidad 2
INSERT INTO venta_detalle (venta_id, producto_id, cantidad, precio_unitario)
VALUES (@venta_id, 3, 2, 6000);

-- Se descuenta el stock
UPDATE productos
SET stock = stock - 2
WHERE id = 3;

-- Validamos que el stock no sea negativo
SELECT CASE
    WHEN stock < 0 THEN 'ERROR'
    ELSE 'OK'
END AS estado
FROM productos
WHERE id = 3;

-- Si algo fallara utilizamos ROLLBACK
ROLLBACK;

-- Si todo va bien, usamos COMMIT
COMMIT;
