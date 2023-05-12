DROP DATABASE IF EXISTS rich_lifestyle;
CREATE DATABASE rich_lifestyle;

USE rich_lifestyle;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR (15) NOT NULL,
    password VARCHAR (20) NOT NULL,
    PRIMARY KEY (id)
);



