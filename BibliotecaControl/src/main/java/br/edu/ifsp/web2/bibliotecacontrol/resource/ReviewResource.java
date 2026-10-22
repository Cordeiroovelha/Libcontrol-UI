package br.edu.ifsp.web2.bibliotecacontrol.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Review;
import br.edu.ifsp.web2.bibliotecacontrol.repository.ReviewRepository;
import br.edu.ifsp.web2.bibliotecacontrol.service.ReviewService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/reviews")
public class ReviewResource {
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private ReviewService reviewService;
	
	@GetMapping
	public List<Review> findAll() {
		return reviewRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Review> findById(@PathVariable Long id){
		Optional<Review> loan = reviewRepository.findById(id);
		if(loan.isPresent())
			return ResponseEntity.ok(loan.get());
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/user/{email}")
	public ResponseEntity<List<Review>> listByUser(@PathVariable String email){
		List<Review> activities = reviewService.findByUser(email);
		if(!activities.isEmpty()) {
			return ResponseEntity.ok(activities);
		}
		return ResponseEntity.notFound().build();
	}	
	
	@PostMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public Review create(@Valid @RequestBody Review review,
			HttpServletRequest response) {
		return reviewRepository.save(review);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		reviewRepository.deleteById(id);
	}
}
