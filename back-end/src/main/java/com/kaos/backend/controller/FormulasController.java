package com.kaos.backend.controller;

import com.kaos.backend.model.Formula;
import com.kaos.backend.repository.FormulaRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/formulas")
@AllArgsConstructor
public class FormulasController {

    private final FormulaRepository formulaRepository;
//    public FormulasController(FormulaRepository formulaRepository) {
//        this.formulaRepository = formulaRepository;
//    }

    @GetMapping
    public List<Formula> list(){
        return formulaRepository.findAll();
    }


}
