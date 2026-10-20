CREATE TABLE user (
	id bigint(20) NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	password varchar(150) NOT NULL,
	active tinyint(1) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user (id, name, email, password, active) 
VALUES (1, 'Murilo Juttel', 'cordeiro@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 1);
INSERT INTO user (id, name, email, password, active) 
VALUES (2, 'Teste', 'teste@gmail.com', '4321', 1);