package com.akram.usersmanagement.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ExceptionHandler {
    @org.springframework.web.bind.annotation.ExceptionHandler(UserException.class)
    public ResponseEntity<Map<String,String>> handleUserException(UserException e)
    {
        Map<String,String> errorDetails = new HashMap<>();
        errorDetails.put("message", e.getMessage());
        errorDetails.put("status", e.getHttpStatus().toString());
        return new ResponseEntity<>(errorDetails, e.getHttpStatus());
    }
}
