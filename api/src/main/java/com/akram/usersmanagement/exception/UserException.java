package com.akram.usersmanagement.exception;

import org.springframework.http.HttpStatus;

public class UserException extends RuntimeException
{
    private HttpStatus httpStatus;

    public UserException(String message, HttpStatus httpStatus)
    {
        super(message);
        this.httpStatus = httpStatus;
    }

    public UserException(String message, Throwable cause, HttpStatus httpStatus)
    {
        super(message, cause);
        this.httpStatus = httpStatus;
    }

    public UserException(String message)
    {
        super(message);
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public UserException(String message, Throwable cause)
    {
        super(message, cause);
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public HttpStatus getHttpStatus()
    {
        return httpStatus;
    }
}
