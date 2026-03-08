package com.Project.E_commerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.Project.E_commerce.entity.Product;
import com.Project.E_commerce.repository.ProductRepository;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping
    public List<Product> getProducts(){

        return productRepository.findAll();

    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){

        return productRepository.save(product);

    }

}