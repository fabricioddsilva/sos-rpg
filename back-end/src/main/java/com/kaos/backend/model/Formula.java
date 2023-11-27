package com.kaos.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Formula {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(nullable = false)
    private int cost;

    @Column(length = 25 ,nullable = false)
    private String process;

    @Column(length = 20,nullable = false)
    private String type;

    @Column(length = 15 ,nullable = false)
    private String execution;

    @Column(length = 35, nullable = false)
    private String range;

    @Column(length = 35,nullable = false)
    private String target;

    @Column(length = 35,nullable = false)
    private String duration;

    @Column(length = 100,nullable = false)
    private String elements;

    @Column(nullable = false)
    private String desc;

    @Column(nullable = false)
    private String amplification;
}
