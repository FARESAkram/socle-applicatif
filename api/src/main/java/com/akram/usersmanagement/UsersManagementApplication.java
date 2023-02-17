package com.akram.usersmanagement;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;


@SpringBootApplication
public class UsersManagementApplication {

    private static final String ALLOWED_ORIGINS = "spring.mvc.cross-origin.allowed-origins";
    @Autowired
    private Environment env;

    public static void main(String[] args) {
        SpringApplication.run(UsersManagementApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        String allowedOrigins = env.getProperty(ALLOWED_ORIGINS);
        System.out.println("allowedOrigins: " + allowedOrigins);
        if (allowedOrigins == null) {
            return new WebMvcConfigurer() {
            };
        }
        String [] allowedOriginsArray = allowedOrigins.split(",");
        System.out.println("allowedOriginsArray: " + Arrays.toString(allowedOriginsArray));
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*")
                        .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
            }
        };
    }
}
