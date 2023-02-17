package com.akram.usersmanagement.Repository;

import com.akram.usersmanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>
{
    Optional<User> findUserByEmailIs(String email);
    Optional<User> findUserByLastNameIsIgnoreCaseAndFirstNameIsIgnoreCase(String lastName, String firstName);
}
