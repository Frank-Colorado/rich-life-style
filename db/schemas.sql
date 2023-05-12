DROP DATABASE IF EXISTS rich_lifestyle;
CREATE DATABASE rich_lifestyle;

USE rich_lifestyle;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR (15) NOT NULL,
    password VARCHAR (20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR (15) NOT NULL,
    comment_body VARCHAR (250) NOT NULL,
    created_at DATE NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR (15) NOT NULL,
    title VARCHAR (30) NOT NULL,
    post_body VARCHAR (500) NOT NULL,
    created_at DATE NOT NULL,
    comment_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (comment_id) REFERENCES comments (id)
);





