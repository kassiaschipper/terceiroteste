package com.br.terceiroteste.model;

import lombok.Data;

@Data
public class Candidato {
    
    int codCandidato;
    
    String nome;
    String status;

    public Candidato() {     
    }

    public Candidato(String nome) {
        this.nome = nome;
        this.codCandidato = nome.hashCode();
        this.status = "Recebido";
    }
    
    public String getNome() {
        return nome;
    }
    public String getStatus(){
        return status;
    }
    public int getCodCandidato() {
        return codCandidato;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    @Override
    public String toString() {
        return "Código: " + codCandidato + " - Nome: " + nome + " - Status: " + status;
    }
}
