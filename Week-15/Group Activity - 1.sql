CREATE DATABASE week15_activity_1;
USE week15_activity_1;

CREATE TABLE Customers(
id INT PRIMARY KEY,
first_name VARCHAR(100),
last_name VARCHAR(100),
email VARCHAR(100)
);

INSERT INTO Customers(id, first_name, last_name, email)
VALUES(1, "Mary", "Barry", "mbarry@gmail.com"),
(2, "Manuel", "Santos", "mannys@gmail.com"),
(3, "Jake", "Little", "jakelit@outlook.com"),
(4, "Luke", "James", "lukejames@yahoo.com");

ALTER TABLE Customers
ADD COLUMN date_of_birth DATE;

ALTER TABLE Customers
RENAME COLUMN date_of_birth TO birthdate;

ALTER TABLE Customers
DROP COLUMN birthdate;

SELECT * FROM Customers;

CREATE TABLE People(
id INT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
address VARCHAR(100),
city VARCHAR(100),
postcode VARCHAR(100),
country VARCHAR(100)
);

INSERT INTO People(id, name, email, address, city, postcode)
VALUES(1, "Mary", "Barry", "mbarry@gmail.com"),
(1, "Manuel", "Santos", "mannys@gmail.com"),
(1, "Jake", "Little", "jakelit"),
(1, "", "", "");

SELECT * FROM People;