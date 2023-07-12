import { useState } from "react";
import styled from "styled-components";
import { marcaEntrevista } from "../service/terceirotesteService";

export default function MarcarEntrevista() {
  const [codigoCandidato, setCodigoCandidato] = useState();
  const [disabledInput, setDisabledInput] = useState(false);

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    const body = {
      codCandidato: parseInt(codigoCandidato),
    };

    marcaEntrevista(body)
      .then((res) => {
        resetForm();
        alert("Entrevista marcada com sucesso")
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
        <label>
          Marcar entrevista:
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
      </form>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 22vw;
  height: 25vh;
  border-radius: 1rem;
  border: 1px solid yellow;

  background-color: yellow;
  margin: 5rem 2rem;
`;
