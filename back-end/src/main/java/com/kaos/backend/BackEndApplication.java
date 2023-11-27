package com.kaos.backend;

import com.kaos.backend.model.Formula;
import com.kaos.backend.model.Livro;
import com.kaos.backend.repository.FormulaRepository;
import com.kaos.backend.repository.LivroRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(LivroRepository livroRepository){
		return args -> {
			Livro l = new Livro();
			l.setName("Vyken");
			l.setDesc("Mágias Malucas de um Homi");
			livroRepository.save(l);
		};
	}

}
