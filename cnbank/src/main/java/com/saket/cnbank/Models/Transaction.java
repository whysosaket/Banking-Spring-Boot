package com.saket.cnbank.Models;

import org.bson.types.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "transactions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {

    @Id
    private ObjectId _id;
    private String from;
    private String to;
    private int amount;
    private String date;
    private String time;
    private String type;

}
