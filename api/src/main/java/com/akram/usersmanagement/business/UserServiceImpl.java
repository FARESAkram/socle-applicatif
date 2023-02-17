package com.akram.usersmanagement.business;

import com.akram.usersmanagement.Repository.UserRepository;
import com.akram.usersmanagement.DTO.UserInfoDTO;
import com.akram.usersmanagement.DTO.UserRegisterDTO;
import com.akram.usersmanagement.entity.User;
import com.akram.usersmanagement.exception.UserException;
import com.akram.usersmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService
{
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }
    @Override
    public UserInfoDTO addUser(UserRegisterDTO userRegisterDTO)
    {
        if ( userRegisterDTO == null )
        {
            throw new UserException("must provide user informations", HttpStatus.BAD_REQUEST);
        }
        if ( userRegisterDTO.getLastName() == null || userRegisterDTO.getLastName().isEmpty() )
        {
            throw new UserException("must provide user last name", HttpStatus.BAD_REQUEST);
        }
        if ( userRegisterDTO.getFirstName() == null || userRegisterDTO.getFirstName().isEmpty() )
        {
            throw new UserException("must provide user first name", HttpStatus.BAD_REQUEST);
        }
        if ( userRegisterDTO.getEmail() == null || userRegisterDTO.getEmail().isEmpty() )
        {
            throw new UserException("must provide user email", HttpStatus.BAD_REQUEST);
        }
        if ( userRegisterDTO.getBirthDate() == null )
        {
            throw new UserException("must provide user birth date", HttpStatus.BAD_REQUEST);
        }
        this.userRepository.findUserByEmailIs(userRegisterDTO.getEmail()).ifPresent(user -> {
            throw new UserException("email already used", HttpStatus.BAD_REQUEST);
        });
        this.userRepository.findUserByLastNameIsIgnoreCaseAndFirstNameIsIgnoreCase(userRegisterDTO.getLastName(), userRegisterDTO.getFirstName()).ifPresent(user -> {
            throw new UserException("lastname and firstname already exist", HttpStatus.BAD_REQUEST);
        });
        User user ;
        try
        {
            user = this.userRepository.save(UserRegisterDTO.toUser(userRegisterDTO));
        }
        catch (Exception e)
        {
            throw new UserException("error while saving user",e);
        }
        return UserInfoDTO.toUserInfoDTO(user);
    }

    @Override
    public UserInfoDTO updateUser(UserRegisterDTO userInfoDTO, Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new UserException(String.format("user with id: %d not found",id), HttpStatus.NOT_FOUND));
        User userWithSameEmail = this.userRepository.findUserByEmailIs(userInfoDTO.getEmail()).orElse(null);
        if ( userWithSameEmail != null && !userWithSameEmail.getId().equals(user.getId()) )
        {
            throw new UserException("email already used", HttpStatus.BAD_REQUEST);
        }
        User userWithSameLastNameAndFirstName = this.userRepository.findUserByLastNameIsIgnoreCaseAndFirstNameIsIgnoreCase(userInfoDTO.getLastName(), userInfoDTO.getFirstName()).orElse(null);
        if ( userWithSameLastNameAndFirstName != null && !userWithSameLastNameAndFirstName.getId().equals(user.getId()) )
        {
            throw new UserException("lastname and firstname already exist", HttpStatus.BAD_REQUEST);
        }
        if ( userInfoDTO.getLastName() != null && !userInfoDTO.getLastName().isEmpty() )
        {
            user.setLastName(userInfoDTO.getLastName());
        }
        if ( userInfoDTO.getFirstName() != null && !userInfoDTO.getFirstName().isEmpty() )
        {
            user.setFirstName(userInfoDTO.getFirstName());
        }
        if ( userInfoDTO.getEmail() != null && !userInfoDTO.getEmail().isEmpty() )
        {
            user.setEmail(userInfoDTO.getEmail());
        }
        if ( userInfoDTO.getBirthDate() != null )
        {
            user.setBirthDate(userInfoDTO.getBirthDate());
        }
        try
        {
            user = this.userRepository.save(user);
        }
        catch (Exception e)
        {
            throw new UserException("error while updating user",e);
        }
        return UserInfoDTO.toUserInfoDTO(user);
    }

    @Override
    public UserInfoDTO deleteUser(Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new UserException(String.format("user with id: %d not found",id), HttpStatus.NOT_FOUND));
        this.userRepository.delete(user);
        return UserInfoDTO.toUserInfoDTO(user);
    }

    @Override
    public UserInfoDTO findUser(Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new UserException(String.format("user with id: %d not found",id), HttpStatus.NOT_FOUND));
        return UserInfoDTO.toUserInfoDTO(user);
    }

    @Override
    public UserInfoDTO findUser(String email) {
        return null;
    }

    @Override
    public UserInfoDTO findUser(String lastName, String firstName) {
        return null;
    }

    @Override
    public List<UserInfoDTO> findAllUsers() {
        List<User> users = this.userRepository.findAll();
        List<UserInfoDTO> userInfoDTOS = new ArrayList<>();
        users.forEach(user -> userInfoDTOS.add(UserInfoDTO.toUserInfoDTO(user)));
        return userInfoDTOS;
    }
}
