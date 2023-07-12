package com.br.terceiroteste.exceptions;

public class CandidatoNaoEncontradoException extends RuntimeException {
    public CandidatoNaoEncontradoException (String message){
        super(message);
    }
}
