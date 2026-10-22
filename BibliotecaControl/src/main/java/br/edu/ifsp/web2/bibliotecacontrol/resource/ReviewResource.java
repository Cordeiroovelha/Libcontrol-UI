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

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Loan;
import br.edu.ifsp.web2.bibliotecacontrol.repository.LoanRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/loan")
public class LoanResource {
	
	@Autowired
	private LoanRepository loanRepository;
	
	@GetMapping
	public List<Loan> findAll() {
		return loanRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Loan> findById(@PathVariable Long id){
		Optional<Loan> loan = loanRepository.findById(id);
		if(loan.isPresent())
			return ResponseEntity.ok(loan.get());
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public Loan create(@Valid @RequestBody Loan loan,
			HttpServletRequest response) {
		return loanRepository.save(loan);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		loanRepository.deleteById(id);
	}
}
