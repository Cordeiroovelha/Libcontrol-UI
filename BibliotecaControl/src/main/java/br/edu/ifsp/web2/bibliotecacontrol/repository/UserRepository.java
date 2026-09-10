package br.edu.ifsp.web2.bibliotecacontrol.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	public Optional<User> findByEmail(String email);
}
