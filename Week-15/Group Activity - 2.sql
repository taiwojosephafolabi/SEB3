CREATE DATABASE week15_activity_2;
USE week15_activity_2;

CREATE TABLE People(
id INT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
address VARCHAR(100),
city VARCHAR(100),
postcode VARCHAR(100),
country VARCHAR(100)
);

INSERT INTO People(id, name, email, address, city, postcode, country)
VALUES(1, "Mary", "mbarry@gmail.com", "5 Grove Road", "London", "LD1 3DN", "United Kingdom"),
(2, "Manuel", "mannys@gmail.com", "94 Bloosom Avenue", "Brighton", "BR7 8TN", "United Kingdom"),
(3, "Jake", "jakelit@outlook.com", "12A Codey Street", "Birmingham", "B10 6RM", "United Kingdom"),
(4, "Luke", "lukejames@yahoo.com", "456 Numbers Boulevard", "Helsinki", "SW1 2ZZ", "Switzerland");

UPDATE People
SET name = "Joseph", country = "Nigeria"
WHERE id = 4;

UPDATE People
SET email = "user3@hotmail.com"
WHERE id = 3;

UPDATE People
SET country = "China"
WHERE id = 2;

UPDATE People
SET name = "John", city = "Liverpool", postcode = "W3 5TY"
WHERE id = 1;

INSERT INTO People(id, name, email, address, city, postcode, country)
VALUES(5, "Elise", "elisefb@gmail.com", "5 Woole Road", "London", "LD6 0DN", "United Kingdom"),
(6, "Sahil", "sahilh@gmail.com", "35 Boreham Avenue", "Bangkok", "TH4 4ND", "Thailand");

DELETE FROM People
WHERE id = 6;

SELECT * FROM People;