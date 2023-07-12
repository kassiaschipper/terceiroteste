import { styled } from "styled-components";
import { PiComputerTowerLight } from "react-icons/pi";

export default function Header() {
  return (
    <HeaderWrapper>
      <IconWrapper>
        {" "}
        <PiComputerTowerLight fontSize={"45px"}></PiComputerTowerLight>
      </IconWrapper>
      <Title>
        <h3>SGRH</h3>
        <p>Sistema de Gestão de Rcursos Humanos</p>
      </Title>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  background-image: linear-gradient(
    to right,
    rgb(118, 118, 118, 0.75),
    rgba(118, 118, 118)
  );
  border-radius: 0.5rem;
  height: 10vh;
  width: 98vw;
  margin: 0 auto;
  margin-top: 5px;
  display: flex;
  padding: 5px;

`;

const Title = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`;

const IconWrapper = styled.div`
  color: white;
`;
