package com.example.demo4.mapper;

import com.example.demo4.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper{
    User findByUsername(@Param("username") String username);
    void insert(User user);

}