import { styled } from 'styled-components';
import AdicionaCandidato from './AdicionaCandidato';
import MarcarEntrevista from './MarcarEntrevista';
import DesqualificaCandidato from './DesqualificaCandidato';
import AprovaCandidato from './AprovaCandidato';
import StatusCandidato from './StatusCandidato';
import CandidatosAprovados from './CandidatosAprovados';

export default function Home() {
    return (
        <HomeWrapper>
        <AdicionaCandidato></AdicionaCandidato>
        <MarcarEntrevista></MarcarEntrevista>
        <DesqualificaCandidato></DesqualificaCandidato>
        <AprovaCandidato></AprovaCandidato>
        <StatusCandidato></StatusCandidato>
        <CandidatosAprovados></CandidatosAprovados>
        </HomeWrapper>
    ) 

}

const HomeWrapper = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
`