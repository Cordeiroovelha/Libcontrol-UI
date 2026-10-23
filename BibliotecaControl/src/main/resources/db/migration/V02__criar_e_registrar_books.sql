CREATE TABLE book (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	author       VARCHAR(50) NOT NULL,
	release_date INT(4) NOT NULL,
	category     VARCHAR(30) NOT NULL,
	rated       FLOAT(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (1, 'Capitão de areia', 'Jorge Amado', '1993', 'NACIONAL', 4.5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (2, 'Hamlet', 'William Shakespeare', '1964', 'INTERNACIONAL', 4.5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (3, 'O Apanhador no Campo de Centeio', 'J. D. Salinger', '1951', 'INTERNACIONAL', 3.5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (4, 'Memórias Póstumas de Brás Cubas', 'Machado de Assis', '1881', 'NACIONAL', 5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (5, 'Só para Um', 'Rita Lobo', '2020', 'GASTRONOMIA', 3.5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (6, 'Psicose', 'Robert Bloch', '1959', 'TERROR', 3.5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (7, 'O Duplo', 'Fiódor Dostoiévski', '1846', 'FILOSOFIA', 5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (8, 'Discurso do Método', 'René Descartes', '1637', 'FILOSOFIA', 4);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (9, 'Todas Técnicas Culinárias: Le Cordon Bleu ', 'Jeni Wright', '2005', 'GASTRONOMIA', 5);

INSERT INTO book (id, name, author, release_date, category, rated) 
VALUES (10, 'Vidas Secas', 'Graciliano Ramos', '1964', 'NACIONAL', 4.5);