USE store;

CREATE TABLE my_info(
id INT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
address VARCHAR(100),
city VARCHAR(100), 
postcode VARCHAR(100),
country VARCHAR(100)
);

INSERT INTO my_info(id, name, email, address, city, postcode, country)
VALUES (1, "Joseph", "joseph@email.com", "1 Street Road", "London", "LD1 1NO", "United Kingdom"),
(2, "Luke", "luke@email.com", "45A Avenue Road", "London", "LD3 6NO", "United Kingdom"),
(3, "Mary", "Maryh@email.com", "603A Boulevard Close", "London", "LD5 9NO", "United Kingdom");

SELECT * FROM my_info;

ALTER TABLE my_info
RENAME TO my_customer_info;

ALTER TABLE my_customer_info
ADD COLUMN last_name VARCHAR(100);

ALTER TABLE my_customer_info
RENAME COLUMN last_name TO surname;

ALTER TABLE my_customer_info
DROP COLUMN surname;

SELECT * FROM my_customer_info;

UPDATE my_customer_info
SET email = "luke6@email.com"
WHERE id = 2;

ALTER TABLE my_customer_info
ADD COLUMN license VARCHAR(100);

UPDATE my_customer_info SET license = "Full", name = "Thomas" WHERE id = 2;
UPDATE my_customer_info SET city = "Essex" WHERE id = 3;

DELETE FROM my_customer_info WHERE id = 1;
