USE nodedb;
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO people(name) VALUES('Samuel');
INSERT INTO people(name) VALUES('Carlos');
INSERT INTO people(name) VALUES('Catarina');
INSERT INTO people(name) VALUES('Wesley');
