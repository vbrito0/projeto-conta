package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Vendas;
import com.devsuperior.dsmeta.repositories.VendasRepository;

@Service
public class VendasService {
	
	@Autowired
	private VendasRepository vendasRepo;

	public List<Vendas> findVendas() {
		return vendasRepo.findAll();
	}
}
