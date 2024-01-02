package com.saket.cnbank.Repositories;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.saket.cnbank.Models.Transaction;


@Repository
public interface TransactionRepository extends MongoRepository<Transaction, ObjectId> {
    List<Transaction> findByFrom(String from);
    void deleteByFrom(String from);
}
