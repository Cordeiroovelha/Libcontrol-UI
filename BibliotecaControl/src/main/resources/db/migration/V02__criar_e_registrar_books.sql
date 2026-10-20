CREATE TABLE book (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	release_date DATE NOT NULL,
	category     VARCHAR(30) NOT NULL,
	rated       FLOAT(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO book (id, name, release_date, category, rated) 
VALUES (1, 'Capitão de areia', '1993-10-5', 'NACIONAL', 4.5);

INSERT INTO book (id, name, release_date, category, rated) 
VALUES (2, 'Hamlet', '1964-11-8', 'INTERNACIONAL', 4);