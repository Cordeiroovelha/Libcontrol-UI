CREATE TABLE loan(
	id		    BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	user_id		BIGINT(20) NOT NULL,
	date_add	DATE NOT NULL,
	rate		FLOAT NOT NULL,
	book_id     BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (book_id) REFERENCES book(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO loan (id, date_add, rate, user_id, book_id) 
VALUES (1,'2026-6-7', 4.5, 1, 1);

INSERT INTO loan (id, date_add, rate, user_id, book_id) 
VALUES (2, '2026-7-16', 4,  2, 2);