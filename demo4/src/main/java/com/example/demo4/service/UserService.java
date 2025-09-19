package com.example.demo4.service;

import com.example.demo4.entity.User;
import com.example.demo4.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService{

    @Autowired
    private UserMapper usermapper;

    public User register(User user){
        if(usermapper.findByUsername(user.getUsername()) != null){
            return null;
        }
        usermapper.insert(user);
        return user;
    }

    public User login(String username , String password){
        User user = usermapper.findByUsername(username);
        if(user != null && password.equals(user.getPassword())){
            return user;
        }

        return null;
   
    }
}
