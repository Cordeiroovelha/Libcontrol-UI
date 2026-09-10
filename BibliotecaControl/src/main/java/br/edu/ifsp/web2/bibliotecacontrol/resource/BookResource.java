package br.edu.ifsp.web2.bibliotecacontrol.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Book;
import br.edu.ifsp.web2.bibliotecacontrol.repository.BookRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/books")
public class BookResource {
	
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping
	public List<Book> findAll() {
		return bookRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Book> findById(@PathVariable Long id){
		Optional<Book> book = bookRepository.findById(id);
		if(book.isPresent())
			return ResponseEntity.ok(book.get());
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public Book create(@Valid @RequestBody Book book,
			HttpServletRequest response) {
		return bookRepository.save(book);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		bookRepository.deleteById(id);
	}
}
