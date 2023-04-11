CREATE DATABASE week_16_joins;
USE week_16_joins;

CREATE TABLE Customers(
id INT(11) PRIMARY KEY,
customer_name VARCHAR(30) NOT NULL,
customer_email VARCHAR(120) NOT NULL,
customer_mobile INT(11)
);

CREATE TABLE Orders(
order_id INT(11) PRIMARY KEY,
customer_id INT(11),
order_name VARCHAR(120),
FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

CREATE TABLE Delivery(
delivery_id INT(11) PRIMARY KEY,
order_id INT(11),
customer_id INT(11) ,
order_delivery_day VARCHAR(120),
FOREIGN KEY (order_id) REFERENCES Orders(order_id),
FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

INSERT INTO Customers(id, customer_name, customer_email, customer_mobile)
VALUES(1, "Joseph" , "joseph@gmail.com", 791234567),
(2, "Ellie", "ellie@gmail.com", 789123456),
(3, "Cedric" , "cedric@gmail.com", 778912345),
(4, "Joshua", "joshua@gmail.com", 767891234),
(5, "Aqsa" , "aqsa@gmail.com", 797654321),
(6, "Louis", "louis@gmail.com", 789654321),
(7, "Moana" , "moana@gmail.com", 778903672),
(8, "Jake", "jake@gmail.com", 767890836);

INSERT INTO orders(order_id, customer_id, order_name)
VALUES(1, 3, "Suitcase"),
(2, 1, "Rollerskates"),
(3, 2, "Training Mat"),
(4, 4, "Peanuts"),
(5, 6, "Monitor Screen"),
(6, 4, "Tracksuit"),
(7, 8, "Trainers"),
(8, 1, "Aloe Plant");

INSERT INTO Delivery(delivery_id, order_id, customer_id , order_delivery_day)
VALUES(1, 4, 4, "Tuesday 4th April 2023"),
(2, 2, 1, "Wednesday 3rd May 2023"),
(3, 3, 2, "Monday 12th December 2022"),
(4, 1, 3, "Sunday 28th August 2022");

SELECT * FROM Customers;
SELECT * FROM Orders;
SELECT * FROM Delivery;

SELECT Customers.customer_name, Orders.order_name
FROM Customers
INNER JOIN Orders 
ON Customers.id = Orders.customer_id;

SELECT Customers.customer_name, Delivery.order_delivery_day
FROM Customers
INNER JOIN Delivery 
ON Customers.id = Delivery.customer_id;

SELECT Customers.customer_name, Orders.order_name, Delivery.order_delivery_day
FROM Customers
INNER JOIN Orders 
ON Customers.id = Orders.customer_id
INNER JOIN Delivery 
ON Customers.id = Delivery.customer_id;

SELECT Customers.customer_name, Orders.order_name 
FROM Customers
RIGHT JOIN  Orders
ON Customers.id = Orders.customer_id;

SELECT Orders.order_name, Customers.customer_name
FROM Orders
RIGHT JOIN  Customers
ON Orders.customer_id = Customers.id;

SELECT Customers.customer_name, Customers.customer_email, Delivery.order_delivery_day 
FROM Customers
RIGHT JOIN  Delivery
ON Customers.id = delivery.customer_id;

SELECT Customers.customer_name, Customers.customer_mobile, Delivery.order_delivery_day 
FROM Delivery
RIGHT JOIN  Customers
ON Delivery.customer_id = Customers.id;

SELECT Orders.order_name, Delivery.order_delivery_day 
FROM Orders
RIGHT JOIN  Delivery
ON Orders.customer_id = Delivery.customer_id;

SELECT Delivery.order_delivery_day, Orders.order_name
FROM Delivery
RIGHT JOIN  Orders
ON Delivery.customer_id = Orders.customer_id;

SELECT Customers.customer_name, Orders.order_name
FROM Customers
LEFT JOIN  Orders
ON Customers.id = Orders.customer_id;

SELECT Orders.order_name, Customers.customer_name
FROM Orders
LEFT JOIN  Customers
ON Orders.customer_id = Customers.id;
