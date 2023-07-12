import { useState } from "react";
import styled from "styled-components";
import { desqualificaCandidato } from "../service/terceirotesteService";
import { AiOutlineUserDelete } from "react-icons/ai";

export default function DesqualificaCandidato() {
  const [codigoCandidato, setCodigoCandidato] = useState();
  const [disabledInput, setDisabledInput] = useState(false);

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    const body = {
      codCandidato: parseInt(codigoCandidato),
    };

    desqualificaCandidato(body)
      .then((res) => {
        resetForm();
        alert("Candidato Desqualificado")
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
      <h3>DESQUALIFICAR CANDIDATO</h3>
      <IconWrapper>
          <AiOutlineUserDelete color="white" fontSize={"5rem"}></AiOutlineUserDelete>{" "}
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
 
  background-color: rgb(185, 17, 25);

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

 

