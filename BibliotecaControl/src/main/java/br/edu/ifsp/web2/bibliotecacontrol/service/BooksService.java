package br.edu.ifsp.web2.bibliotecacontrol.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Book;
import br.edu.ifsp.web2.bibliotecacontrol.repository.BookRepository;

@Service
public class BooksService {
	@Autowired
	private BookRepository bookRepository;
	
	public Book update(Long id, Book book) {
		Book bookSaved = findBookById(id);
		BeanUtils.copyProperties(book, bookSaved, "id");
		return bookRepository.save(bookSaved);
	}
	
	public Book findBookById(Long id) {
		Book bookSaved = bookRepository.findById(id).orElseThrow(()-> new EmptyResultDataAccessException(1)); 
		return bookSaved;
	}
}
