package com.example.BibliCovid.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerCovid {

	
	
	@RequestMapping("/")
	public String home(Model model) {
		String vista="index";
		return vista;
	}
	
	
	@RequestMapping("/publicaciones")
	public String punlicaciones(Model model) {
		String vista="publicaciones";
		return vista;
	}
	
	@RequestMapping("/conteo")
	public String graficas(Model model) {
		String vista="conteo";
		return vista;
	}

	@RequestMapping("/autores")
	public String chartWordCloud(Model model) {
		String vista="autores";
		return vista;
	}

	@RequestMapping("/resumen")
	public String nodos(Model model) {
		String vista="resumen";
		return vista;
	}

	@RequestMapping("/lenguajes")
	public String RadiusLenguaje(Model model) {
		String vista="lenguajes";
		return vista;
	}
}

