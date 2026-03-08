package com.Project.E_commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Project.E_commerce.entity.Cart;

public interface CartRepository extends JpaRepository<Cart,Long>{

}
