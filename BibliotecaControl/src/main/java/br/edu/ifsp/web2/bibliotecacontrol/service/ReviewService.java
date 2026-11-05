package br.edu.ifsp.web2.bibliotecacontrol.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Book;
import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Review;
import br.edu.ifsp.web2.bibliotecacontrol.domain.model.User;
import br.edu.ifsp.web2.bibliotecacontrol.repository.BookRepository;
import br.edu.ifsp.web2.bibliotecacontrol.repository.ReviewRepository;
import br.edu.ifsp.web2.bibliotecacontrol.repository.UserRepository;

@Service
public class ReviewService {
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BookRepository bookRepository;
	
	public Review update(Long id, Review loan) {
		Review reviewSaved = findLoanById(id);
		BeanUtils.copyProperties(loan, reviewSaved, "id");
		return reviewRepository.save(reviewSaved);
	}
	
	public Review findLoanById(Long id) {
		Review reviewSaved = reviewRepository.findById(id).orElseThrow(()-> new EmptyResultDataAccessException(1));
		return reviewSaved;
	}
	
	public List<Review> findByUser(String email){
		Optional<User> user = userRepository.findByEmail(email);
		if(user.isPresent()) {
			return reviewRepository.findByUser(user.get());
		}
		return null;
	}
	
	public List<Review> findByBook(Long idBook){
		Optional<Book> book = bookRepository.findById(idBook);
		if(book.isPresent()) {
			return reviewRepository.findByBook(book.get());
		}
		return null;
	}
	
}
