package com.Project.E_commerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name="orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int quantity;
    private double totalPrice;

    @ManyToOne
    private User user;

    @ManyToOne
    private Product product;

}