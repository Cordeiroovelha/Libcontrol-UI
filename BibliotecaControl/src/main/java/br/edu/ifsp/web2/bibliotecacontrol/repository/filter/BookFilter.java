package br.edu.ifsp.web2.bibliotecacontrol.repository.filter;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Category;
import br.edu.ifsp.web2.bibliotecacontrol.domain.model.User;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class BookFilter {

	private User user;
	
	@Enumerated(EnumType.STRING)
	private Category category;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate initialDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate finalDate;
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}
	
	public Category getCategory() {
		return category;
	}
	
	public void setCategory(Category category) {
		this.category = category;
	}
	
	public LocalDate getInitialDate() {
		return initialDate;
	}
	
	public void setInitialDate(LocalDate initialDate) {
		this.initialDate = initialDate;
	}
	
	public LocalDate getFinalDate() {
		return finalDate;
	}
	
	public void setFinalDate(LocalDate finalDate) {
		this.finalDate = finalDate;
	}
	
}
