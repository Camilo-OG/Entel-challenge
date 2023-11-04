CREATE DATABASE RentACar;
USE RentACar;
CREATE TABLE Vendedor (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(50)
);
CREATE TABLE MarcaAuto (
    ID INT PRIMARY KEY,
    NombreMarca VARCHAR(50)
);
CREATE TABLE ModeloAuto (
    ID INT PRIMARY KEY,
    NombreModelo VARCHAR(50),
    MarcaID INT,
    Precio INT,
    FOREIGN KEY (MarcaID) REFERENCES marcaAuto(ID)
);
CREATE TABLE Solicitudes (
    ID INT PRIMARY KEY,
    ModeloID INT,
    VendedorID INT,
    FechaSolicitud DATE,
    FOREIGN KEY (ModeloID) REFERENCES ModeloAuto(ID),
    FOREIGN KEY (VendedorID) REFERENCES Vendedor(ID)
);
INSERT INTO Vendedor (ID, Nombre)
VALUES 
( 1, 'Jose'),
( 2, 'Ignacio'),
( 3, 'Felipe'),
( 4, 'Isabel'),
( 5, 'Fernanda'),
( 6, 'Josefa');
INSERT INTO MarcaAuto (ID, NombreMarca)
VALUES
( 1, 'Chevrolet'),
( 2, 'Toyota'),
( 3, 'Volkswagen'),
( 4, 'Mazda'),
( 5, 'BMW'),
( 6, 'Mercedez Benz');
INSERT INTO ModeloAuto (ID, NombreModelo, MarcaID, Precio)
VALUES
( 1, 'Prisma', 1, 7500000),
( 2, 'Onix', 1, 8500000),
( 3, 'Yaris', 2, 9500000),
( 4, 'Corolla', 2, 12000000),
( 5, 'Gol', 3, 7000000),
( 6, 'Voyage', 3, 7200000),
( 7, 'CX-5', 4, 16000000),
( 8, 'CX-3', 4, 13000000),
( 9, 'X7', 5, 101000000),
( 10, 'Serie 2 Coupé', 5, 43000000),
( 11, '770K', 6, 220000000),
( 12, 'AMG GTR', 6, 135000000);
INSERT INTO Solicitudes (ID, ModeloID, VendedorID, FechaSolicitud)
VALUES
    (1, 1, 4, '2023-05-01'),
    (2, 12, 3, '2023-10-06'),
    (3, 2, 1, '2023-07-15'),
    (4, 5, 5, '2023-01-20'),
    (5, 3, 6, '2023-01-25'),
    (6, 4, 2, '2023-01-30'),
    (7, 10, 6, '2023-02-05'),
    (8, 11, 4, '2023-01-10'),
    (9, 3, 3, '2023-05-15'),
    (10, 2, 2, '2023-03-20'),
    (11, 1, 4, '2023-05-05'),
    (12, 12, 3, '2023-12-10'),
    (13, 2, 1, '2023-10-15'),
    (14, 5, 5, '2023-04-20'),
    (15, 3, 6, '2023-09-25'),
    (16, 4, 2, '2023-08-30'),
    (17, 10, 6, '2023-02-05'),
    (18, 11, 4, '2023-08-10'),
    (19, 3, 3, '2023-04-15'),
    (20, 2, 2, '2023-05-20');
    
// Obtener las 3 marcas mas solicitadas
SELECT MA.NombreMarca AS Marca, COUNT(S.ID) AS CantidadSolicitudes
FROM MarcaAuto MA
JOIN ModeloAuto MO ON MA.ID = MO.MarcaID
JOIN Solicitudes S ON MO.ID = S.ModeloID
GROUP BY MA.NombreMarca
ORDER BY CantidadSolicitudes DESC
LIMIT 3;
//Solicitudes mes actual
SELECT * FROM Solicitudes
WHERE MONTH(FechaSolicitud) = 10;
// vendedor con menos solicitudes en 30 dias
SELECT V.ID, V.Nombre
FROM Vendedor V
INNER JOIN Solicitudes S ON V.ID = S.VendedorID
WHERE S.FechaSolicitud >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY V.ID, V.Nombre
ORDER BY COUNT(S.ID)
LIMIT 1;
// Modelos sin solicitudes
SELECT M.ID, M.NombreModelo, M.MarcaID, M.Precio
FROM ModeloAuto M
LEFT JOIN Solicitudes S ON M.ID = S.ModeloID
WHERE S.ID IS NULL;
// 3 meses con mas dinero de ventas
SET lc_time_names = 'es_ES';
SELECT DATE_FORMAT(S.FechaSolicitud, '%M %Y') AS MesAnio, SUM(M.Precio) AS Ventas
FROM Solicitudes S
JOIN ModeloAuto M ON S.ModeloID = M.ID
GROUP BY MesAnio
ORDER BY Ventas DESC
LIMIT 3;








