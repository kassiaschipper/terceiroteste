import { useState } from "react";
import styled from "styled-components";
import { statusCandidato } from "../service/terceirotesteService";
import { AiOutlineSearch } from "react-icons/ai";


export default function StatusCandidato() {
  const [codigoCandidato, setCodigoCandidato] = useState();
  const [disabledInput, setDisabledInput] = useState(false);

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    statusCandidato(parseInt(codigoCandidato))
      .then((res) => {
        resetForm();
        alert(`Status ${res.data}`)
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
      <h3>VERIFICAR STATUS</h3>
      <IconWrapper>
          <AiOutlineSearch color="white" fontSize={"5rem"}></AiOutlineSearch>{" "}
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
        <button type="submit" disabled={disabledInput} >Buscar</button>
        </ContentWrapper>
      </form>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 28vw;
  height: 35vh;
  border-radius: 1rem;

  background-color:rgb(204, 100, 81);
 
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
