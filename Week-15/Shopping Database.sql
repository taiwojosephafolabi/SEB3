CREATE DATABASE store;
USE store;

CREATE TABLE customer_shopping(
id INT,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
mobile INT(11) NOT NULL,
postcode VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE products(
product_id INT,
customer_id INT,
product_name VARCHAR(100) NOT NULL,
product_brand VARCHAR(100),
PRIMARY KEY(product_id),
FOREIGN KEY(customer_id) REFERENCES customer_shopping(id)
);

CREATE TABLE shopping_dates(
shopping_dates_id INT,
customer_id INT,
product_id INT,
dates VARCHAR(100) NOT NULL,
PRIMARY KEY(shopping_dates_id),
FOREIGN KEY(customer_id) REFERENCES customer_shopping(id),
FOREIGN KEY(product_id) REFERENCES products(product_id)
);

INSERT INTO customer_shopping(id, name, email, address, mobile, postcode)
VALUES(1, "Joseph", "Joseph@email.com", "London", 0712345678, "LN1 3DO");

INSERT INTO products(product_id, customer_id, product_name, product_brand)
VALUES(1, 1, "shoe", "adidas");

INSERT INTO shopping_dates(shopping_dates_id, customer_id, product_id, dates)
VALUES(1, 1, 1, "28/03/2023 19:19");

SELECT * from customer_shopping;
SELECT * from products;
SELECT * from shopping_dates;

INSERT INTO customer_shopping(id, name, email, address, mobile, postcode)
VALUES(2, "Ellie", "Ellie@email.com", "London", 0787654321, "IR1 3AN");

INSERT INTO customer_shopping(id, name, email, address, mobile, postcode)
VALUES(3, "Joshua", "Joshua@email.com", "London", 0756781234, "GH1 3AN");

INSERT INTO products(product_id, customer_id, product_name, product_brand)
VALUES(2, 2, "shampoo", "Garnier");

INSERT INTO products(product_id, customer_id, product_name, product_brand)
VALUES(3, 3, "football", "Mitre");

INSERT INTO shopping_dates(shopping_dates_id, customer_id, product_id, dates)
VALUES(2, 2, 2, "28/03/2023 19:25"),
(3, 3, 3, "28/03/2023 19:31");

SELECT * from customer_shopping where email = "Joshua@email.com"; -- You can use statements like tickets > 5000

INSERT INTO customer_shopping(id, name, email, address, mobile, postcode)
VALUES(4, "Cedric", "Cedric@email.com", "Dubai", 0712345678, "DU1 3BA");

SELECT * from customer_shopping where address = "Dubai";

SELECT * from customer_shopping where address = "Dubai" || address = "London";

SELECT * from customer_shopping where address = "London" && postcode = "IR1 3AN";
