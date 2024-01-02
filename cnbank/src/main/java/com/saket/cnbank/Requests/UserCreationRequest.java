package com.saket.cnbank.Requests;

public class UserCreationRequest {
    private String name;
    private String email;
    private String username;
    private String password;

    public UserCreationRequest() {
    }

    public UserCreationRequest(String name, String email, String username, String password) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;

    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }
}
