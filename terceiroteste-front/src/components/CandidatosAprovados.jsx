import { useState } from "react";
import styled from "styled-components";
import { candidatosAprovados } from "../service/terceirotesteService";

export default function CandidatosAprovados() {
  const [disabledInput, setDisabledInput] = useState(false);
  const [listaCandidatos, setListaCandidatos] = useState([]);

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    candidatosAprovados()
      .then((res) => {
        console.log(res.data)
        setListaCandidatos(res.data)
        setDisabledInput(false);
      })
      .catch((res) => {
       console.log(res)
        alert(
          `${res.response.data}`
        );
        setDisabledInput(false);
      });
  }

  
  return (
    <Wrapper>
      <form onSubmit={sendForm}>
        <label>
          Aprovados          
        </label>
        <button type="submit" disabled={disabledInput} >Mostrar Aprovados</button>        
      </form>
      {listaCandidatos.map((candidato, index) => 
        <p> - {candidato}</p>
        )}
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 22vw;
  height: 25vh;
  border-radius: 1rem;
  border: 1px solid yellow;

  background-color: lightgray;
  margin: 5rem 2rem;
`;
