package com.example.TransmiApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.example.TransmiApp.repository.UserRepository;

@Service
public class UserService{
    
    @Autowired
    private UserRepository userRepository;
    

    public UserDetailsService userDetailsService() {
        return (String username) -> userRepository.findByEmail(username)
                .orElseThrow();
    }
}

