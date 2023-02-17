package com.akram.usersmanagement.DTO;

import com.akram.usersmanagement.entity.User;

public class UserInfoDTO extends UserRegisterDTO{

    private String getEndPoint;
    private String putEndPoint;
    private String deleteEndPoint;
    private String getAllEndPoint;
    private String postEndPoint;

    public static User toUser(UserInfoDTO userInfoDTO)
    {
        User user = new User();
        user.setLastName(userInfoDTO.getLastName());
        user.setFirstName(userInfoDTO.getFirstName());
        user.setBirthDate(userInfoDTO.getBirthDate());
        user.setEmail(userInfoDTO.getEmail());
        return user;
    }

    public static UserInfoDTO toUserInfoDTO(User user)
    {
        UserInfoDTO userInfoDTO = new UserInfoDTO();
        userInfoDTO.setLastName(user.getLastName());
        userInfoDTO.setFirstName(user.getFirstName());
        userInfoDTO.setBirthDate(user.getBirthDate());
        userInfoDTO.setEmail(user.getEmail());
        userInfoDTO.getEndPoint = "/users/"+user.getId();
        userInfoDTO.putEndPoint = "/users/"+user.getId();
        userInfoDTO.deleteEndPoint = "/users/"+user.getId();
        userInfoDTO.getAllEndPoint = "/users";
        userInfoDTO.postEndPoint = "/users";
        return userInfoDTO;
    }

    public String getGetEndPoint() {
        return getEndPoint;
    }

    public void setGetEndPoint(String getEndPoint) {
        this.getEndPoint = getEndPoint;
    }

    public String getPutEndPoint() {
        return putEndPoint;
    }

    public void setPutEndPoint(String putEndPoint) {
        this.putEndPoint = putEndPoint;
    }

    public String getDeleteEndPoint() {
        return deleteEndPoint;
    }

    public void setDeleteEndPoint(String deleteEndPoint) {
        this.deleteEndPoint = deleteEndPoint;
    }

    public String getGetAllEndPoint() {
        return getAllEndPoint;
    }

    public void setGetAllEndPoint(String getAllEndPoint) {
        this.getAllEndPoint = getAllEndPoint;
    }

    public String getPostEndPoint() {
        return postEndPoint;
    }

    public void setPostEndPoint(String postEndPoint) {
        this.postEndPoint = postEndPoint;
    }
}
