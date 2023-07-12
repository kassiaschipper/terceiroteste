import { useState } from "react";
import styled from "styled-components";
import { candidatosAprovados } from "../service/terceirotesteService";
import { CiViewList } from "react-icons/ci";

export default function CandidatosAprovados() {
  const [disabledInput, setDisabledInput] = useState(false);
  const [listaCandidatos, setListaCandidatos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    candidatosAprovados()
      .then((res) => {
        console.log(res.data);
        setListaCandidatos(res.data);
        setDisabledInput(false);
        openModal();
      })
      .catch((res) => {
        console.log(res);
        alert(`${res.response.data}`);
        setDisabledInput(false);
      });
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <Wrapper>
        <form onSubmit={sendForm}>
          <h3>LISTA DE APROVADOS</h3>
          <IconWrapper>
            <CiViewList color="white" fontSize={"5rem"}></CiViewList>{" "}
          </IconWrapper>
          <ContentWrapper>
            <button type="submit" disabled={disabledInput}>
              {" "}
              Aprovados
            </button>
          </ContentWrapper>
        </form>
      </Wrapper>
      {showModal && (
        <>
          <ModalOverlay />
          <ModalWrapper>
            <h2>Lista de aprovados</h2>
            <ModalContent>
              <CloseButton onClick={closeModal}>X</CloseButton>
              <ListWrapper>
                {listaCandidatos.map((candidato, index) => (
                  <p key={index}>{candidato}</p>
                ))}
              </ListWrapper>
            </ModalContent>
          </ModalWrapper>
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 28vw;
  height: 35vh;
  border-radius: 1rem;

  background-color: rgb(239, 170, 66);

  display: flex;
  justify-content: center;

  h3 {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
    color: white;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  button {
    width: 5rem;
    height: 1.5rem;
    background-color: white;
    border: none;
    border-radius: 5px;
  }
`;
const ListWrapper = styled.div``;

const ModalWrapper = styled.div`
  background-color: white;
  width: 40vw;
  height: 70vh;
  border-radius: 1rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  h2{
    color:black;
    font-weight: 700;
    width: 100%;
    height: 10%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CloseButton = styled.button`
  border: none;
  border-radius: 45%;
  background-color: lightgray;
  position: fixed;
  right: 15px;
  top: 5px;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
