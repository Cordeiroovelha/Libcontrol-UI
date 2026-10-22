package br.edu.ifsp.web2.bibliotecacontrol.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Review;
import br.edu.ifsp.web2.bibliotecacontrol.domain.model.User;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	public List<Review> findByUser(User user);
}
