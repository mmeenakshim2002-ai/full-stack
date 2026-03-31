package com.Project.E_commerce.controller;

import com.Project.E_commerce.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.Project.E_commerce.entity.User;
import com.Project.E_commerce.entity.DeletedUser;
import com.Project.E_commerce.repository.UserRepository;
import com.Project.E_commerce.repository.DeletedUserRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DeletedUserRepository deletedUserRepository;

    @PostMapping("/register")
    public User register(@RequestBody User user){

        return userRepository.save(user);

    }

//    @PostMapping("/register")
//    public User register(@ModelAttribute User user){
//        return userRepository.save(user);
//    }
//
//    @PostMapping("/createaccount")
//    public String register(@ModelAttribute User user){
//
//        return userRepository.save(user);
//
//    }

//    @PostMapping("/login")
//    public User login(@RequestParam String email,
//                      @RequestParam String password){
//
//        return userRepository.findByEmailAndPassword(email,password);
//
//    }

//    @PostMapping("/login")
//    public String login(@RequestParam String email,@RequestParam String password){
//        User user = userRepository.findByEmailAndPassword(email,password);
//        if(user != null){
//            return "Login successful";
//        }else{
//            return "Invalid Email or Password";
//        }
//    }

    @PostMapping("/deleteAccount")
    public String deleteAccount(@RequestParam Long id){

        User user=userRepository.findById(id).orElse(null);

        if(user!=null){

            DeletedUser deletedUser=new DeletedUser();

            deletedUser.setFullname(user.getFullname());
            deletedUser.setEmail(user.getEmail());
            deletedUser.setPhone(user.getPhone());

            deletedUserRepository.save(deletedUser);

            userRepository.delete(user);

            return "Account Deleted Successfully";
        }

        return "User Not Found";

    }

}