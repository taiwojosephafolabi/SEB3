CREATE DATABASE week_16_homework;
USE week_16_homework;

CREATE TABLE Record_label (
id INT PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
establish_date DATE
);

INSERT INTO Record_label
VALUES (1, "Sony Music", "1929-09-09"),
(2, "Universal Music Publishing Group", "1972-01-01"),
(3, "Island Records", "1959-07-04"),
(4, "Atlantic Records", "1947-10-01"),
(5, "Def Jam Recordings", "1984-01-01");


CREATE TABLE Artists (
artist_id INT PRIMARY KEY NOT NULL,
record_label_id INT NOT NULL,
artist_name VARCHAR(50) NOT NULL,
FOREIGN KEY (record_label_id) REFERENCES record_label(id)
);

INSERT INTO Artists
VALUES (1, 1,"Adele"),
(2, 1, "A$AP ROCKY"),
(3, 1, "Childish Gambino"),
(4, 2, "Taylor Swift"),
(5, 2, "Lil Baby"),
(6, 2, "Big Sean"),
(7, 3, "Amy Winehouse"),
(8, 3, "Drake"),
(9, 3, "METRO BOOMIN"),
(10, 4, "Burna Boy"),
(11, 4, "Bazzi"),
(12, 4, "Cardi B"),
(13, 5, "Adekunle Gold"),
(14, 5, "Justin Bieber"),
(15, 5, "Teyana Taylor");

CREATE TABLE Album (
album_id INT PRIMARY KEY NOT NULL,
artist_id INT NOT NULL,
album_name VARCHAR(50) NOT NULL,
total_tracks INT NOT NULL,
year_of_release INT NOT NULL,
FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);

INSERT INTO Album
VALUES (1, 1, "30", 12, 2021),
(2, 2, "TESTING", 15, 2018),
(3, 3, "3.15.20", 12, 2020),
(4, 4, "Midnights", 13, 2022),
(5, 5, "It's Only Me", 23, 2022),
(6, 6, "Detroit", 18, 2022),
(7, 7, "Lioness: Hidden Treasures", 12, 2011),
(8, 8, "Certified Lover Boy", 21, 2021),
(9, 9, "NOT ALL HEROES WEAR CAPES (Deluxe)", 26, 2018),
(10, 10, "Love, Damini", 19, 2022),
(11, 11, "Infinite Dream", 19, 2022),
(12, 12, "Invasion of Privacy", 13, 2018),
(13, 13, "Catch Me If You Can", 14, 2022),
(14, 14, "Justice", 16, 2021),
(15, 15, "The Album", 23, 2020);

CREATE TABLE Song (
song_id INT PRIMARY KEY NOT NULL,
artist_id INT NOT NULL,
song_name VARCHAR(50) NOT NULL,
album_id INT,
features VARCHAR(100),
duration REAL NOT NULL,
FOREIGN KEY (album_id) REFERENCES Album(album_id),
FOREIGN KEY (artist_id) REFERENCES Artists(artist_id)
);

INSERT INTO Song 
VALUES (1, 1, "Strangers By Nature", 1, "", 3.02),
(2, 1, "Easy On Me", 1, "", 3.44),
(3, 1, "My Little Love", 1, "", 6.29),
(4, 1, "Cry Your Heart Out", 1, "", 4.15);

INSERT INTO Song 
VALUES (5, 5, "Real Spill", 5 ,"",3.18),
(6, 5, "Never Hating", 5, "Young Thug", 2.40),
(7, 5, "Forever", 5, "Fridayy", 2.47),
(8, 5, "Detox", NULL , "", 2.41);



INSERT INTO Song 
VALUES (9, 8, "Champagne Poetry", 8, "", 5.36),
(10, 8, "Girls Want Girls", 8, "Lil Baby", 3.41),
(11, 8, "Way 2 Sexy", 8, "Future, Young Thug", 4.17),
(12, 8, "Search & Rescue", NULL, "", 4.32);

INSERT INTO Song 
VALUES (13, 10, "Cloak & Dagger", 10, "J Hus", 3.31),
(14, 10, "Kilometre", 10, "", 2.32),
(15, 10, "Last Last", 10, "", 2.52),
(16, 10, "B. D'OR", NULL, "Wizkid", 3.09);

INSERT INTO Song 
VALUES (17, 14, "Deserve You", 14, "", 2.32),
(18, 14, "Unstable", 14, "The Kid LAROI", 2.38),
(19, 14, "Peaches", 14, "Daniel Caeser, Giveon", 3.18),
(20, 14, "Get Me", NULL, "Kehlani", 3.05);

SHOW TABLES;
SELECT * FROM Record_label;
SELECT * FROM Artists;
SELECT * FROM Album;
SELECT * FROM Song;


