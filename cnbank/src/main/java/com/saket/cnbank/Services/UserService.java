package com.saket.cnbank.Services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;

import com.saket.cnbank.Repositories.UserRepository;
import com.saket.cnbank.Models.User;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private final Object lock = new Object();

    public int checkBalance(String username) {
        return userRepository.findByUsername(username).getBalance();
    }

    private void executeInThreadPool(int iterations, Runnable task) {
        ExecutorService executorService = Executors.newFixedThreadPool(iterations);
        System.out.println("Executing " + iterations + " iterations in a thread pool...");
        try {
            for (int i = 0; i < iterations; i++) {
                executorService.submit(task);
            }
        } finally {
            executorService.shutdown();
        }
    }

    public void executeInThreadPoolSync(int iterations, Runnable task) {
        ExecutorService executorService = Executors.newFixedThreadPool(iterations);
        System.out.println("Executing " + iterations + " iterations in a thread pool...");

        try {
            for (int i = 0; i < iterations; i++) {
                executorService.submit(task);
            }

            executorService.shutdown();
            executorService.awaitTermination(Long.MAX_VALUE, TimeUnit.NANOSECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            e.printStackTrace();
        }
    }

    // Non-Thread-Safe Deposit Method
    public int depositNotThreadSafe(String username, int amount, int iterations) {
        User user = userRepository.findByUsername(username);
        executeInThreadPool(iterations, () -> {
            user.setBalance(user.getBalance() + amount);
            userRepository.save(user);
        });
        return user.getBalance();
    }

    // Thread-Safe Deposit Method
    public int depositThreadSafe(String username, int amount, int iterations) {
        User user = userRepository.findByUsername(username);
        executeInThreadPoolSync(iterations, () -> {
            synchronized (lock) {
                user.setBalance(user.getBalance() + amount);
                userRepository.save(user);
            }
        });
        return user.getBalance();
    }

    // Non-Thread-Safe Withdrawal Method
      public int withdrawNotThreadSafe(String username, int amount, int iterations) {
        User user = userRepository.findByUsername(username);
        AtomicInteger totalAmount = new AtomicInteger(0);

        executeInThreadPool(iterations, () -> {
            int balance = user.getBalance();
            if (balance < amount) {
                System.out.println("Insufficient Balance!");
            } else {
                totalAmount.addAndGet(amount);
                user.setBalance(balance - amount);
                userRepository.save(user);
            }
        });

        return totalAmount.get();
    }

    // Thread-Safe Withdrawal Method
    public int withdrawThreadSafe(String username, int amount, int iterations) {
        User user = userRepository.findByUsername(username);
        AtomicInteger totalAmount = new AtomicInteger(0);

        executeInThreadPoolSync(iterations, () -> {
            synchronized (lock) {
                int balance = user.getBalance();
                if (balance < amount) {
                    System.out.println("Insufficient Balance!");
                } else {
                    totalAmount.addAndGet(amount);
                    user.setBalance(balance - amount);
                    userRepository.save(user);
                }
            }
        });

        return totalAmount.get();
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

    public String createUser(String name, String email, String username, String password) {
        // return false if user already exists
        if (userRepository.findByUsername(username) != null) {
            return "Username already in use!";
        }
        if (userRepository.findByEmail(email) != null) {
            return "Email already in use!";
        }
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(password);
        user.setBalance(0);
        userRepository.save(user);
        return "User Created Successfully!";
    }

    public boolean loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user.getPassword().equals(password)) {
            return true;
        } else {
            return false;
        }
    }

    public void resetBalance(String username) {
        User user = userRepository.findByUsername(username);
        user.setBalance(0);
        userRepository.save(user);
    }

    public void setBalance(String username, int amount) {
        User user = userRepository.findByUsername(username);
        user.setBalance(amount);
        userRepository.save(user);
    }

    public List<String> getUserInfo(String username) {
        User user = userRepository.findByUsername(username);
        List<String> userInfo = new ArrayList<>();
        userInfo.add(user.getName());
        userInfo.add(user.getEmail());
        userInfo.add(user.getUsername());
        userInfo.add(String.valueOf(user.getBalance()));
        return userInfo;
    }
}
