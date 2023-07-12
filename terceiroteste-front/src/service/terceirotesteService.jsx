import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/hiring";

function adicionaCandidato(body) {
  const promise = axios.post(`${BASE_URL}/start`, body);
  return promise;
}

function marcaEntrevista(body) {
  const promise = axios.post(`${BASE_URL}/schedule`, body);
  return promise;
}

function desqualificaCandidato(body) {
  const promise = axios.post(`${BASE_URL}/disqualify`, body);
  return promise;
}

function aprovaCandidato(body) {
  const promise = axios.post(`${BASE_URL}/approve`, body);
  return promise;
}

function statusCandidato(codCandidato) {
  const promise = axios.get(`${BASE_URL}/status/candidate/${codCandidato}`);
  return promise;
}

function candidatosAprovados() {
  const promise = axios.get(`${BASE_URL}/approved`);
  return promise;
}

export {
  adicionaCandidato,
  marcaEntrevista,
  desqualificaCandidato,
  aprovaCandidato,
  statusCandidato,
  candidatosAprovados,
};
