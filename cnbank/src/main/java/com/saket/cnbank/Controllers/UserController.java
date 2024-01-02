package com.saket.cnbank.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saket.cnbank.Requests.DepositCreationRequest;
import com.saket.cnbank.Requests.TransferCreatingRequest;
import com.saket.cnbank.Requests.UserCreationRequest;
import com.saket.cnbank.Services.UserService;

@RestController()
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String index() {
        return "<h1>Welcome to the User Controller!</h1>";
    }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody UserCreationRequest request) {
        String response = userService.createUser(request.getName(), request.getEmail(), request.getUsername(), request.getPassword());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserCreationRequest request) {
        boolean response = userService.loginUser(request.getUsername(), request.getPassword());
        if (response) {
            return new ResponseEntity<>(request.getUsername(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Login Failed!", HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/getinfo")
    public ResponseEntity<String> getUserInfo(@RequestHeader String username) {
        List<String> response = userService.getUserInfo(username);
        return new ResponseEntity<>(response.toString(), HttpStatus.OK);
    }

    @GetMapping("/checkbalance")
    public ResponseEntity<Integer> checkBalance(@RequestHeader String username) {
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @GetMapping("/resetbalance")
    public ResponseEntity<Integer> resetBalance(@RequestHeader String username) {
        userService.resetBalance(username);
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @PostMapping("/setbalance")
    public ResponseEntity<Integer> setBalance(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        userService.setBalance(username, request.getAmount());
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @PostMapping("/depositunsafe")
    public ResponseEntity<Integer> depositNotThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.depositNotThreadSafe(username, request.getAmount(), request.getIterations());
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @PostMapping("/depositsafe")
    public ResponseEntity<Integer> depositThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.depositThreadSafe(username, request.getAmount(), request.getIterations());
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @PostMapping("/withdrawunsafe")
    public ResponseEntity<Integer> withdrawNotThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.withdrawNotThreadSafe(username, request.getAmount(), request.getIterations());
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @PostMapping("/withdrawsafe")
    public ResponseEntity<Integer> withdrawThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.withdrawThreadSafe(username, request.getAmount(), request.getIterations());
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @PostMapping("/transferunsafe")
    public ResponseEntity<Integer> transferNotThreadSafe(@RequestHeader String username, @RequestBody TransferCreatingRequest request) {
        userService.transferNotThreadSafe(username, request.getAmount(), request.getIterations(), request.getSendto());
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @PostMapping("/transfersafe")
    public ResponseEntity<Integer> transferThreadSafe(@RequestHeader String username, @RequestBody TransferCreatingRequest request) {
        userService.transferThreadSafe(username, request.getAmount(), request.getIterations(), request.getSendto());
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }



    
}
