import { useState } from "react";
import styled from "styled-components";
import { adicionaCandidato } from "../service/terceirotesteService";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function AdicionaCandidato() {
  const [nome, setNome] = useState("");
  const [codigoCandidato, setCodigoCandidato] = useState("");
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
        setCodigoCandidato(res.data);
        setDisabledInput(false);
      })
      .catch((res) => {
        alert(`${res.response.data}`);
        setDisabledInput(false);
      });
  }

  function resetForm() {
    setNome("");
  }

  return (
    <Wrapper>
      <form onSubmit={sendForm}>
      <h3>REGISTRAR CANDIDATO</h3>
        <IconWrapper>
          <AiOutlineUserAdd color="white" fontSize={"5rem"}></AiOutlineUserAdd>{" "}
        </IconWrapper>
        <ContentWrapper>
          <label>
           <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              disabled={disabledInput}
            />
          </label>
          <button type="submit" disabled={disabledInput} >
            Salvar
          </button>
      {codigoCandidato !== "" ? <span>Código do candidato: {codigoCandidato} </span> : <></>}
        </ContentWrapper>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 28vw;
  height: 35vh;
  border-radius: 1rem;
  background-color: rgb(39, 169, 219);

  display: flex;
  justify-content: center;

  span{
    margin-top: 5px;
  }

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
