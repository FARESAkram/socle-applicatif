package com.akram.usersmanagement.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "users",uniqueConstraints={
        @UniqueConstraint(columnNames = {"last_name", "first_name"})
})
public class User
{
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "birth_date", nullable = false)
    private LocalDate birthDate;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    public User() {
    }

    public User(String lastName, String firstName, LocalDate birthDate, String email) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "User{" +
                "id=" + this.getId() +
                ", lastName='" + this.getLastName() + '\'' +
                ", firstName='" + this.getFirstName() + '\'' +
                ", birthDate=" + this.getBirthDate() +
                ", email='" + this.getEmail() + '\'' +
                '}';
    }
}
