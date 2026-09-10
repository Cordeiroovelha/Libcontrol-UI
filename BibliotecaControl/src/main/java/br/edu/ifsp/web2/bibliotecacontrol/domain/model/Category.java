package br.edu.ifsp.web2.bibliotecacontrol.domain.model;

public enum Category {
	AVENTURA("Aventura"),
	TERROR("Terror"),
	FILOSOFIA("Filosofia"),
	GASTRONOMIA("Gastronomia"),
	NACIONAL("Nacional"),
	INTERNACIONAL("Internacional");

	private String Category;
	
	Category(String category) {
		this.Category = category;
	}

	public String getCategory() {
		return Category;
	}	
	
}
