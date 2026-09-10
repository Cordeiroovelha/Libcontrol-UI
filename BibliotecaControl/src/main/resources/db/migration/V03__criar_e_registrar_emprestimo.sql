CREATE TABLE loan(
	id		    BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	date_loan   DATE	   NOT NULL,
	return_loan DATE	   NOT NULL,
	user_id		BIGINT(20) NOT NULL,
	book_id     BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (book_id) REFERENCES book(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO loan (id, date_loan, return_loan, user_id, book_id) 
VALUES (1, '2026-6-6' , '2026-6-13', 1, 1);

INSERT INTO loan (id, date_loan, return_loan, user_id, book_id) 
VALUES (2, '2026-7-10', '2026-7-17', 2, 2);