package com.saket.cnbank.Controllers;

import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.saket.cnbank.Models.Transaction;
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

    @CrossOrigin(origins = "*")
    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody UserCreationRequest request) {
        String response = userService.createUser(request.getName(), request.getEmail(), request.getUsername(), request.getPassword());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserCreationRequest request) {
        boolean response = userService.loginUser(request.getUsername(), request.getPassword());
        if (response) {
            return new ResponseEntity<>(request.getUsername(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Login Failed!", HttpStatus.UNAUTHORIZED);
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/getinfo")
    public ResponseEntity<String> getUserInfo(@RequestHeader String username) {
        List<String> response = userService.getUserInfo(username);
        Map<String, String> map = new HashMap<>();
        map.put("name", response.get(0));
        map.put("email", response.get(1));
        map.put("username", response.get(2));
        map.put("balance", response.get(3));
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return new ResponseEntity<>(objectMapper.writeValueAsString(map), HttpStatus.OK);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return new ResponseEntity<>("{}", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/checkbalance")
    public ResponseEntity<Integer> checkBalance(@RequestHeader String username) {
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/resetbalance")
    public ResponseEntity<Integer> resetBalance(@RequestHeader String username) {
        userService.resetBalance(username);
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/setbalance")
    public ResponseEntity<Integer> setBalance(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        userService.setBalance(username, request.getAmount());
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/depositunsafe")
    public ResponseEntity<Integer> depositNotThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.depositNotThreadSafe(username, request.getAmount(), request.getIterations());
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/depositsafe")
    public ResponseEntity<Integer> depositThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.depositThreadSafe(username, request.getAmount(), request.getIterations());
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/withdrawunsafe")
    public ResponseEntity<Integer> withdrawNotThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.withdrawNotThreadSafe(username, request.getAmount(), request.getIterations());
        if (newBalance <= 0) {
            return new ResponseEntity<>(newBalance, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/withdrawsafe")
    public ResponseEntity<Integer> withdrawThreadSafe(@RequestHeader String username, @RequestBody DepositCreationRequest request) {
        int newBalance = userService.withdrawThreadSafe(username, request.getAmount(), request.getIterations());
         if (newBalance <= 0) {
            return new ResponseEntity<>(newBalance, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newBalance, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/transferunsafe")
    public ResponseEntity<Integer> transferNotThreadSafe(@RequestHeader String username, @RequestBody TransferCreatingRequest request) {
        int r = userService.transferNotThreadSafe(username, request.getAmount(), request.getIterations(), request.getSendto());
        if(r == 0) {
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/transfersafe")
    public ResponseEntity<Integer> transferThreadSafe(@RequestHeader String username, @RequestBody TransferCreatingRequest request) {
        int r = userService.transferThreadSafe(username, request.getAmount(), request.getIterations(), request.getSendto());
        if(r == 0) {
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.checkBalance(username), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/gettransactions")
    public ResponseEntity<List<String>> getTransactions(@RequestHeader String username) {
        List<Transaction> transactions = userService.getTransactions(username);

        List<String> jsonTransactions = transactions.stream()
                .map(this::convertTransactionToJson)
                .collect(Collectors.toList());

        return new ResponseEntity<>(jsonTransactions, HttpStatus.OK);
    }



      private String convertTransactionToJson(Transaction transaction) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(transaction);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{}";
        }
    }

    
}
