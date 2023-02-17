package com.akram.usersmanagement.DTO;

import com.akram.usersmanagement.entity.User;

import java.time.LocalDate;

public class UserRegisterDTO
{
    private String lastName;
    private String firstName;
    private LocalDate birthDate;
    private String email;
    public UserRegisterDTO() {
    }

    public UserRegisterDTO(String lastName, String firstName, LocalDate birthDate, String email) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.email = email;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static User toUser(UserRegisterDTO userRegisterDTO)
    {
        User user = new User();
        user.setLastName(userRegisterDTO.getLastName());
        user.setFirstName(userRegisterDTO.getFirstName());
        user.setBirthDate(userRegisterDTO.getBirthDate());
        user.setEmail(userRegisterDTO.getEmail());
        return user;
    }

    public static UserRegisterDTO toUserRegisterDTO(User user)
    {
        UserRegisterDTO userRegisterDTO = new UserRegisterDTO();
        userRegisterDTO.setLastName(user.getLastName());
        userRegisterDTO.setFirstName(user.getFirstName());
        userRegisterDTO.setBirthDate(user.getBirthDate());
        userRegisterDTO.setEmail(user.getEmail());
        return userRegisterDTO;
    }

    @Override
    public String toString() {
        return "UserRegisterDTO{" +
                "lastName='" + lastName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", birthDate=" + birthDate +
                ", email='" + email + '\'' +
                '}';
    }
}
