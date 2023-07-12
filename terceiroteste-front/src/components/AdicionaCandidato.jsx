import { useState } from "react";
import styled from "styled-components";
import { adicionaCandidato } from "../service/terceirotesteService";

export default function AdicionaCandidato() {
    const [nome, setNome] = useState('');
    const [codigoCandidato, setCodigoCandidato] = useState('');
    const [disabledInput, setDisabledInput] = useState(false);

    function sendForm(e) {
        e.preventDefault();
        setDisabledInput(true);
    
        const body = {
          nome,        
        };
    
        adicionaCandidato(body)
          .then((res) => {
             resetForm();
             setCodigoCandidato(res.data)
             setDisabledInput(false);
           })
           .catch((res) => {
            alert(
              `${res.response.data}`
            );
            setDisabledInput(false);
          });
       };
    
      function resetForm() {
        setNome("");
      }
    
  return (
    <Wrapper>
      <form onSubmit={sendForm}>
        <label>
          Registrar candidato:
          <input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required disabled={disabledInput}/>
        </label>
        <button type="submit" disabled={disabledInput} >Salvar</button>
      </form>
      {codigoCandidato !== "" ? <span>Código do Candidato: {codigoCandidato} </span> : <></>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 22vw;
  height: 25vh;
  border-radius: 1rem;
  border: 1px solid yellow;

  background-color: beige;
  margin: 5rem 2rem;
`;
