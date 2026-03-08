package com.Project.E_commerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.Project.E_commerce.entity.Orders;
import com.Project.E_commerce.repository.OrdersRepository;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    OrdersRepository ordersRepository;

    @PostMapping("/place")
    public Orders placeOrder(@RequestBody Orders order){

        return ordersRepository.save(order);

    }

}