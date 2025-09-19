package com.example.demo4.controller;

import com.example.demo4.entity.User;
import com.example.demo4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController

@RequestMapping("/")
public class UserController{
    @Autowired
    private UserService userservice;

    @PostMapping("/register")
    public String register(@RequestBody User user){
        User userReg = userservice.register(user);
        if(userReg != null){
            return "success";
        }else {
            return "already exist";
        } 
        
    }

    @PostMapping("/login")
    public String login(@RequestBody User userauth){
        String username = userauth.getUsername();
        String password = userauth.getPassword();
        User user = userservice.login(username , password);
        if(user != null){
            return "success";
        }else{
            return "username wrong or password wrong";
        }
    }
}