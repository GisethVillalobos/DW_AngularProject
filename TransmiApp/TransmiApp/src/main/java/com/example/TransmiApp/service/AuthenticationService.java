package com.example.TransmiApp.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.TransmiApp.dto.JwtAuthenticationResponse;
import com.example.TransmiApp.dto.LoginDTO;
import com.example.TransmiApp.dto.UserRegistrationDTO;
import com.example.TransmiApp.model.Role;
import com.example.TransmiApp.model.User;
import com.example.TransmiApp.repository.UserRepository;


@Service
public class AuthenticationService {

    private Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtAuthenticationResponse signup(UserRegistrationDTO request) {
        Role role = determineRoleByEmail(request.getEmail());
        User user = new User(
                request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword()),
                role);
                

        userRepository.save(user);
        String jwt = jwtService.generateToken(user);
        return new JwtAuthenticationResponse(jwt, user.getEmail(), user.getRole());
    }

    private Role determineRoleByEmail(String email) {
        if (email.endsWith("@admin.transmi.com")) {
            return Role.ADMIN;
        } else if (email.endsWith("@coordi.transmi.com")) {
            return Role.COORDI;
        } else {
            return Role.PASSENGER;
        }
    }

    public JwtAuthenticationResponse login(LoginDTO request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
        String jwt = jwtService.generateToken(user);
        return new JwtAuthenticationResponse(jwt, user.getEmail(), user.getRole());
    }

}

