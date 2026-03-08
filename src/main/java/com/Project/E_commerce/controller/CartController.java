package com.Project.E_commerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.Project.E_commerce.entity.Cart;
import com.Project.E_commerce.repository.CartRepository;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    CartRepository cartRepository;

    @PostMapping("/add")
    public Cart addToCart(@RequestBody Cart cart){

        return cartRepository.save(cart);

    }

}