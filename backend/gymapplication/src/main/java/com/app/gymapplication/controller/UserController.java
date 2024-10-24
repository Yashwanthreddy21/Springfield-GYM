package com.app.gymapplication.controller;

import com.app.gymapplication.model.User;
import com.app.gymapplication.service.JwtService;
import com.app.gymapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("register")
    public User register(@RequestBody User user){
        return userService.saveUser(user);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("login")
    public String login(@RequestBody User user){
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if(authentication.isAuthenticated())
            return jwtService.generateToken(user.getUsername());
        else
            return "Not success ";

    }


    @GetMapping("hello")
    public String greet(){
        return "Hello welcome!!!!!";
    }
}
