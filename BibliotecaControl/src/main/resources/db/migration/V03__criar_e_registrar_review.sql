CREATE TABLE review(
	id		    BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	date_add	DATE NOT NULL,
	rate		FLOAT NOT NULL,
	user_id		BIGINT(20) NOT NULL,
	book_id     BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (book_id) REFERENCES book(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO review (id, date_add, rate, user_id, book_id) 
VALUES (1,'2026-6-7', 4.5, 1, 1);

INSERT INTO review (id, date_add, rate, user_id, book_id) 
VALUES (2, '2026-7-16', 4,  2, 2);

INSERT INTO review (id, date_add, rate, user_id, book_id) 
VALUES (3, '2026-07-19', 3.5,  1, 2);