package com.saket.cnbank.Requests;

public class TransferCreatingRequest {
    private String sendto;
    private int amount;
    private int iterations;

    public TransferCreatingRequest() {
    }

    public TransferCreatingRequest(String sendto, int amount, int iterations) {
        this.sendto = sendto;
        this.amount = amount;
        this.iterations = iterations;
    }

    public String getSendto() {
        return this.sendto;
    }

    public int getAmount() {
        return this.amount;
    }

    public int getIterations() {
        return this.iterations;
    }
}
