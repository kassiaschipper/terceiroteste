import { useState } from "react";
import styled from "styled-components";
import { aprovaCandidato } from "../service/terceirotesteService";

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
        <label>
          Aprovar candidato:
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

  background-color: green;
  margin: 5rem 2rem;
`;
