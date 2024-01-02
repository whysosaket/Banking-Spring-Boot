package com.saket.cnbank.Requests;

public class DepositCreationRequest {
    private int amount;
    private int iterations;

    public DepositCreationRequest() {
    }

    public DepositCreationRequest(int amount, int iterations) {
        this.amount = amount;

    }

    public int getAmount() {
        return this.amount;
    }

    public int getIterations() {
        return this.iterations;
    }
}
