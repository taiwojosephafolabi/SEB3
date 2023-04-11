CREATE DATABASE events;
USE events;

CREATE TABLE event_list(
event_id INT PRIMARY KEY,
event_name VARCHAR(100) NOT NULL,
event_date VARCHAR(100) NOT NULL,
sub_event_id INT,
FOREIGN KEY (sub_event_id) REFERENCES sub_event_list(sub_event_id)
);

CREATE TABLE ticket_sales(
event_id INT,
ticket_sales INT,
ticket_capacity INT NOT NULL,
number_of_guests INT PRIMARY KEY,
FOREIGN KEY (event_id) REFERENCES event_list(event_id)
);

CREATE TABLE guest_info(
guest_id INT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
mobile INT(11) NOT NULL,
date_of_birth VARCHAR(8) NOT NULL,
number_of_events INT
);

CREATE TABLE sub_event_list(
event_id INT,
sub_event_id INT PRIMARY KEY,
sub_event_name VARCHAR(100) NOT NULL,
sub_event_time VARCHAR(5) NOT NULL,
genre VARCHAR(100) NOT NULL,
FOREIGN KEY (event_id) REFERENCES event_list(event_id)
);

ALTER TABLE event_list
ADD sub_event_id INT;


SELECT * from event_list;
SELECT * from ticket_sales;
SELECT * from guest_info;
SELECT * from sub_event_list;

INSERT INTO event_list(event_id, event_
