CREATE DATABASE IF NOT EXISTS laboratory_staff;
USE laboratory_staff;
CREATE TABLE IF NOT EXISTS positions (
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
position_name VARCHAR(20)
);
INSERT INTO positions (id, position_name) VALUES (null, 'quality manager');
INSERT INTO positions (id, position_name) VALUES (null, 'engineer');
INSERT INTO positions (id, position_name) VALUES (null, 'laborant');
CREATE TABLE IF NOT EXISTS stuff ( 
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
salary INTEGER,
position_id INT UNSIGNED NOT NULL
);
INSERT INTO stuff ( id, first_name, last_name, salary, position_id) VALUES ( null, 'Elena', 'Likina', 33000, 1);
INSERT INTO stuff ( id, first_name, last_name, salary, position_id) VALUES ( null, 'Marina', 'Harova', 25000, 2);
INSERT INTO stuff ( id, first_name, last_name, salary, position_id) VALUES ( null, 'Alena', 'Lebedeva', 22000, 3);
INSERT INTO stuff ( id, first_name, last_name, salary, position_id) VALUES ( null, 'Valentina', 'Lavrova', 23000, 3);
SELECT * FROM stuff;
SELECT * 
FROM stuff INNER JOIN positions ON stuff.position_id=positions.id;

SELECT * 
FROM stuff 
WHERE stuff.salary < 30000;

SELECT first_name, last_name, salary, position_name
FROM stuff 
INNER JOIN positions ON stuff.position_id=positions.id 
WHERE stuff.salary<30000 AND position_name='laborant';