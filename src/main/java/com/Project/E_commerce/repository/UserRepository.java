package com.Project.E_commerce.repository;

import com.Project.E_commerce.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long>{

    //User findByEmailAndPassword(String email,String password);

}