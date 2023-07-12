package com.br.terceiroteste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.terceiroteste.Segundo;
import com.br.terceiroteste.exceptions.CandidatoExistenteException;
import com.br.terceiroteste.exceptions.CandidatoNaoEncontradoException;
import com.br.terceiroteste.exceptions.NomeInvalidoException;
import com.br.terceiroteste.model.Candidato;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(value = "api/v1/hiring/")
public class CandidatoController {

    @Autowired
    private Segundo processo;

    @PostMapping("start")
    public ResponseEntity<Candidato> adicionaCandidato(@RequestBody Candidato candidato) {

        String nome = candidato.getNome();

        try {
            int codigoCandidato = this.processo.iniciarProcesso(nome);

            return new ResponseEntity(codigoCandidato, HttpStatus.CREATED);

        } catch (CandidatoExistenteException exception) {

            return new ResponseEntity(exception.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (NomeInvalidoException exception) {

            return new ResponseEntity(exception.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception exception) {

            return new ResponseEntity("Erro desconhecido tente novamente", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("schedule")
    public ResponseEntity<Candidato> marcaEntrevista(@RequestBody Candidato candidato) {

        int codigo = candidato.getCodCandidato();

        try {
            this.processo.marcarEntrevista(codigo);

            return new ResponseEntity(HttpStatus.OK);

        } catch (CandidatoNaoEncontradoException exception) {

            return new ResponseEntity(exception.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception exception) {

            return new ResponseEntity("Erro desconhecido tente novamente", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("disqualify")
    public ResponseEntity<Candidato> desqualiifcarCandidato(@RequestBody Candidato candidato) {

        int codigo = candidato.getCodCandidato();

        try {
            this.processo.desqualificarCandidato(codigo);

            return new ResponseEntity(HttpStatus.OK);

        } catch (CandidatoNaoEncontradoException exception) {

            return new ResponseEntity(exception.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception exception) {

            return new ResponseEntity("Erro desconhecido tente novamente", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("approve")
    public ResponseEntity<Candidato> aprovaCandidato(@RequestBody Candidato candidato) {

        int codigo = candidato.getCodCandidato();

        try {
            this.processo.aprovarCandidato(codigo);

            return new ResponseEntity(HttpStatus.OK);

        } catch (CandidatoNaoEncontradoException exception) {

            return new ResponseEntity(exception.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception exception) {

            return new ResponseEntity("Erro desconhecido tente novamente", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("status/candidate/{codCandidato}")
    public ResponseEntity<String> statusCadidato(@PathVariable("codCandidato") int codigo) {

        try {
            String status = this.processo.verificarStatusCandidato(codigo);

            return new ResponseEntity<String>(status, HttpStatus.OK);

        } catch (CandidatoNaoEncontradoException exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        
        } catch (Exception exception) {
            return new ResponseEntity("Erro desconhecido tente novamente", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("approved")
    public ResponseEntity candidatosAprovados() {

        try {
            List<String> aprovados = this.processo.obterAprovados();

            return new ResponseEntity(aprovados, HttpStatus.OK);

        } catch (Exception exception) {
            return new ResponseEntity("Erro desconhecido tente novamente", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}