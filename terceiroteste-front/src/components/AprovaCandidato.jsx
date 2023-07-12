import { useState } from "react";
import styled from "styled-components";
import { aprovaCandidato } from "../service/terceirotesteService";
import { BsPersonCheck } from "react-icons/bs";

export default function AprovaCandidato() {
  const [codigoCandidato, setCodigoCandidato] = useState();
  const [disabledInput, setDisabledInput] = useState(false);

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    const body = {
      codCandidato: parseInt(codigoCandidato),
    };

    aprovaCandidato(body)
      .then((res) => {
        resetForm();
        alert("Candidato Aprovado")
        setDisabledInput(false);
      })
      .catch((res) => {
        alert(
          `${res.response.data}`
        );
        setDisabledInput(false);
      });
  }

  function resetForm() {
    setCodigoCandidato("");
  }

  return (
    <Wrapper>
      <form onSubmit={sendForm}>
      <h3>APROVAR CANDIDATO</h3>
      <IconWrapper>
          <BsPersonCheck color="white" fontSize={"5rem"}></BsPersonCheck>{" "}
        </IconWrapper>
        <ContentWrapper>
        <label>
           <input
            type="text"
            placeholder="Código do Candidato"
            value={codigoCandidato}
            onChange={(e) => setCodigoCandidato(e.target.value)}
            required
            disabled={disabledInput}
          />
        </label>
        <button type="submit" disabled={disabledInput} >Salvar</button>
        </ContentWrapper>
      </form>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 28vw;
  height: 35vh;
  border-radius: 1rem;

  background-color: rgb(60, 92, 16);
  display: flex;
  justify-content: center;

  h3{
    text-align: center;
    margin-top: 0.5rem;
    color: white;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input{
    border: none;
    border-radius: 2px;
    margin-bottom:5px;   
  }

  button{
    width: 5rem;
    height: 1.5rem;
    background-color:white;
    border: none;
    border-radius: 5px;
    
  }
`;
