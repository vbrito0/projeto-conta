package com.devsuperior.dsmeta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Vendas;
import com.devsuperior.dsmeta.services.VendasService;

@RestController
@RequestMapping(value = "/vendas")
public class VendasController {
	
	@Autowired
	private VendasService vendaService;
	
	@GetMapping
	public List<Vendas> findVendas(){
		return vendaService.findVendas();
	}
}
