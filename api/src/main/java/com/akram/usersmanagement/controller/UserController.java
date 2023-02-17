package com.akram.usersmanagement.controller;

import com.akram.usersmanagement.DTO.UserInfoDTO;
import com.akram.usersmanagement.DTO.UserRegisterDTO;
import com.akram.usersmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController
{
    private final UserService userService;

    @Autowired
    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    @GetMapping(value = "/users" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserInfoDTO>> getAllUsers()
    {

            return ResponseEntity.ok(userService.findAllUsers());

    }

    @PostMapping(value = "/users", consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserInfoDTO> addUser(@RequestBody() UserRegisterDTO userRegisterDTO)
    {

            return ResponseEntity.ok(userService.addUser(userRegisterDTO));

    }

    @GetMapping(value = "/users/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserInfoDTO> getUserById(@PathVariable("id") Long id)
    {

            return ResponseEntity.ok(userService.findUser(id));

    }

    @PutMapping(value = "/users/{id}", consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserInfoDTO> updateUser(@RequestBody() UserRegisterDTO userRegisterDTO,@PathVariable("id") Long id)
    {

            return ResponseEntity.ok(userService.updateUser(userRegisterDTO, id));

    }

    @DeleteMapping(value = "/users/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserInfoDTO> deleteUser(@PathVariable("id") Long id)
    {

            return ResponseEntity.ok(userService.deleteUser(id));

    }
}
