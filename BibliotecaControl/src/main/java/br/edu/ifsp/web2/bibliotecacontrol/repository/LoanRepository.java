package br.edu.ifsp.web2.bibliotecacontrol.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, Long>{

}
