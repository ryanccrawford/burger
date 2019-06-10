-- Drop Database in case we created it already
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
-- Creates our table of burgers
CREATE TABLE burgers(
id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT FALSE
)

-- To seed the database use the seeds.sql file
