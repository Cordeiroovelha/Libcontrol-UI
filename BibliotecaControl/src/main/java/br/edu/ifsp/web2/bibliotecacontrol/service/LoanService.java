package br.edu.ifsp.web2.bibliotecacontrol.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;

import br.edu.ifsp.web2.bibliotecacontrol.domain.model.Loan;
import br.edu.ifsp.web2.bibliotecacontrol.repository.LoanRepository;

public class LoanService {
	@Autowired
	private LoanRepository loanRepository;
	
	public Loan update(Long id, Loan loan) {
		Loan loanSaved = findLoanById(id);
		BeanUtils.copyProperties(loan, loanSaved, "id");
		return loanRepository.save(loanSaved);
	}
	
	public Loan findLoanById(Long id) {
		Loan loanSaved = loanRepository.findById(id).orElseThrow(()-> new EmptyResultDataAccessException(1));
		return loanSaved;
	}
	
}
