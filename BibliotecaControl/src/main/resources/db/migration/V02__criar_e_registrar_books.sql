CREATE TABLE book (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	release_date DATE NOT NULL,
	category     VARCHAR(30) NOT NULL,
	booked       TINYINT(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO book (id, name, release_date, category, booked) 
VALUES (1, 'Capitão de areia', '1993-10-5', 'NACIONAL', 0);

INSERT INTO book (id, name, release_date, category, booked) 
VALUES (2, 'Hamlet', '1964-11-8', 'INTERNACIONAL', 1);