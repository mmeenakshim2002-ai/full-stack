package com.Project.E_commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Project.E_commerce.entity.DeletedUser;

public interface DeletedUserRepository extends JpaRepository<DeletedUser,Long>{

}