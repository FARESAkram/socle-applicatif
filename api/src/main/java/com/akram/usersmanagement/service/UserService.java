package com.akram.usersmanagement.service;

import com.akram.usersmanagement.DTO.UserInfoDTO;
import com.akram.usersmanagement.DTO.UserRegisterDTO;

import java.util.List;

public interface UserService
{
    UserInfoDTO addUser(UserRegisterDTO userRegisterDTO);
    UserInfoDTO updateUser(UserRegisterDTO userInfoDTO, Long id);
    UserInfoDTO deleteUser(Long id);
    UserInfoDTO findUser(Long id);
    UserInfoDTO findUser(String email);
    UserInfoDTO findUser(String lastName,String firstName);
    List<UserInfoDTO> findAllUsers();
}
