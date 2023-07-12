import { styled } from "styled-components";
import AdicionaCandidato from "./AdicionaCandidato";
import MarcarEntrevista from "./MarcarEntrevista";
import DesqualificaCandidato from "./DesqualificaCandidato";
import AprovaCandidato from "./AprovaCandidato";
import StatusCandidato from "./StatusCandidato";
import CandidatosAprovados from "./CandidatosAprovados";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <HomeWrapper>
        <AdicionaCandidato></AdicionaCandidato>
        <MarcarEntrevista></MarcarEntrevista>
        <DesqualificaCandidato></DesqualificaCandidato>
        <AprovaCandidato></AprovaCandidato>
        <StatusCandidato></StatusCandidato>
        <CandidatosAprovados></CandidatosAprovados>
      </HomeWrapper>
    </>
  );
}

const HomeWrapper = styled.div`
  width: 86vw;
  height: 75vh;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 1.5rem;
  border: 1x solid rgb(10, 10, 10);

`;
