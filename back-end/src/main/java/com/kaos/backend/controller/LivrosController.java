package com.kaos.backend.controller;

import com.kaos.backend.model.Livro;
import com.kaos.backend.repository.LivroRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livros")
@AllArgsConstructor
public class LivrosController {

    private LivroRepository livroRepository;

    @GetMapping
    public List<Livro> livros(){
        return livroRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livro> findById(@PathVariable Long id){
        return livroRepository.findById(id)
                .map(recordFound -> ResponseEntity.ok().body(recordFound))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Livro create(@RequestBody Livro livro){
      return livroRepository.save(livro);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> update(@PathVariable Long id, @RequestBody Livro livro){
        return livroRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setName(livro.getName());
                    recordFound.setDesc(livro.getDesc());
                    Livro updated = livroRepository.save(recordFound);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        return livroRepository.findById(id)
                .map(recordFound -> {
                    livroRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
