package com.br.terceiroteste;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.br.terceiroteste.exceptions.CandidatoExistenteException;
import com.br.terceiroteste.exceptions.CandidatoNaoEncontradoException;
import com.br.terceiroteste.exceptions.NomeInvalidoException;
import com.br.terceiroteste.model.Candidato;

@Component
public class Segundo {
    List<Candidato> listaCandidatos = new ArrayList<>();

    public int iniciarProcesso(String nome) {

        if (nome == null || nome.trim().isEmpty()) {
            throw new NomeInvalidoException("Nome Inválido");
        }

        Candidato candidato = new Candidato(nome.trim());

        Optional<Candidato> verificaCandidato = listaCandidatos.stream()
                .filter(value -> value.getNome().equals(nome))
                .findFirst();

        if (verificaCandidato.isPresent()) {
            throw new CandidatoExistenteException("Candidato já participa do processo.");
        }

        listaCandidatos.add(candidato);
        int codCandidato = candidato.getCodCandidato();

        return codCandidato;

    }

    public void marcarEntrevista(int codCandidato) {

        Optional<Candidato> verificaCandidato = listaCandidatos.stream()
                .filter(candidato -> (candidato.getCodCandidato() == codCandidato) && ("Recebido".equals(candidato.getStatus())))
                .findFirst();
                
        verificaCandidato.ifPresent(candidato -> candidato.setStatus("Qualificado"));
             
        if (verificaCandidato.isEmpty()) {
            throw new CandidatoNaoEncontradoException("Candidato não encontrado");
        }
     }

    public void desqualificarCandidato(int codCandidato) {

        Optional<Candidato> verificaCandidato = listaCandidatos.stream()
                .filter(candidato -> candidato.getCodCandidato() == codCandidato)
                .findFirst();

        if (verificaCandidato.isPresent()) {
            listaCandidatos.remove(verificaCandidato.get());
        } else if (verificaCandidato.isEmpty()) {
            throw new CandidatoNaoEncontradoException("Candidato não encontrado");
        }

    }

    public void aprovarCandidato(int codCandidato) {

        Optional<Candidato> verificaCandidato = listaCandidatos.stream()
                .filter(candidato -> candidato.getCodCandidato() == codCandidato)
                .findFirst();

        verificaCandidato.ifPresent(candidato -> {
            if (candidato.getStatus().equals("Qualificado")) {
                candidato.setStatus("Aprovado");
            } else {
                throw new CandidatoNaoEncontradoException("Candidato não encontrado");
            }
        });

        if (verificaCandidato.isEmpty()) {
            throw new CandidatoNaoEncontradoException("Candidato não encontrado");
        }

    }

    public String verificarStatusCandidato(int codCandidato) {

        Optional<Candidato> verificaCandidato = listaCandidatos.stream()
                .filter(candidato -> candidato.getCodCandidato() == codCandidato)
                .findFirst();

        if (verificaCandidato.isPresent()) {
            return verificaCandidato.get().getStatus();
        }

        throw new CandidatoNaoEncontradoException("Candidato não encontrado");
    }

    public List<String> obterAprovados() {

        List<String> verificaCandidatosAprovados = listaCandidatos.stream()
                .filter(candidato -> candidato.getStatus().equals("Aprovado")).map(candidato -> candidato.getNome())
                .collect(Collectors.toList());

        return verificaCandidatosAprovados;
    }

}
