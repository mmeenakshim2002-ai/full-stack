package com.Project.E_commerce.repository;

import com.Project.E_commerce.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders,Long>{

}