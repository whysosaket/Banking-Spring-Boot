package com.saket.cnbank.Services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.saket.cnbank.Repositories.UserRepository;
import com.saket.cnbank.Models.User;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public int checkBalance(String username) {
        return userRepository.findByUsername(username).getBalance();
    }

    // Non-Thread-Safe Deposit Method
    public void depositNotThreadSafe(String username, int amount) {
        User user = userRepository.findByUsername(username);
        user.setBalance(user.getBalance() + amount);
        userRepository.save(user);
    }

    // Not Thread-Safe Withdrawal Method
    public void withdrawNotThreadSafe(String username, int amount) {
        User user = userRepository.findByUsername(username);
        user.setBalance(user.getBalance() - amount);
        userRepository.save(user);
    }

    // Thread-Safe Deposit Method
    public synchronized void depositThreadSafe(String username, int amount) {
        User user = userRepository.findByUsername(username);
        user.setBalance(user.getBalance() + amount);
        userRepository.save(user);
    }

    // Thread-Safe Withdrawal Method
    public synchronized void withdrawThreadSafe(String username, int amount) {
        User user = userRepository.findByUsername(username);
        user.setBalance(user.getBalance() - amount);
        userRepository.save(user);
    }

    public void transfer(String username, int amount, int iterations, String toUsername) {
        User user = userRepository.findByUsername(username);
        User toUser = userRepository.findByUsername(toUsername);

        executeInThreadPool(iterations, () -> {
            user.setBalance(user.getBalance() - amount);
            toUser.setBalance(toUser.getBalance() + amount);
            userRepository.save(user);
            userRepository.save(toUser);
        });
    }

    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    private void executeInThreadPool(int iterations, Runnable task) {
        ExecutorService executorService = Executors.newFixedThreadPool(iterations);
        try {
            for (int i = 0; i < iterations; i++) {
                executorService.submit(task);
            }
        } finally {
            executorService.shutdown();
        }
    }
}
