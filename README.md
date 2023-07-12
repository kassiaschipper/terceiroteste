# Terceiro Teste

Este é o repositório do projeto Terceiroteste, uma aplicação de gerenciamento do processo seletivo de candidatos.

## Configuração

Siga as instruções abaixo para configurar e executar a aplicação localmente.

### Pré-requisitos

- Certifique-se de ter o Git instalado em seu sistema.
- Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema.
- Certifique-se de ter o Java instalado em seu sistema.

### Instalação

1. Clone este repositório:
  ```shell
 git clone <URL do repositório>
  ```
2. Acesse a pasta do projeto:
 ```bash
 cd terceiroteste/terceiroteste
 ```
3. Inicie o servidor Java.

4. Instale as dependências do projeto:
 ```shell
 cd terceiroteste-front
 ```
```bash
 npm install
```

## Execução
Para iniciar a aplicação, execute o seguinte comando na raiz do projeto:
 ```bash
  npm run dev
 ```
Após executar o comando acima, a aplicação estará disponível em http://localhost:5173/.

Você já pode testar a plicação.

![terceiroteste](https://github.com/kassiaschipper/terceiroteste/assets/78599273/bf0d6d2e-89d9-4bfb-bcac-a810c91807b8)


## Funcionamento da API 
### Para iniciar o porcesso você deve fornecer o nome do candidato (string): 

POST /api/v1/hiring/start

A resposta esperada é um código único (inteiro). 

### Para marcar entrevista você deve fornecer um código de candidato válido (int):

POST /api/v1/hiring/schedule

### Para desqualificar um candidato você deve fornecer um código de candidato válido (int):

POST /api/v1/hiring/disqualify

### Para aprovar um candidato você deve fornecer um código de candidato válido (int):

POST /api/v1/hiring/approve

### Para verificar o status do candidato dentro do processo seletivo você deve fornecer um código de candidato válido (int):

 GET /api/v1/hiring/status/candidate/{id}

### Para obter a lista de candidatos aprovados:

GET /api/v1/hiring/approved

A resposta esperada é uma lista com os os candidatos que foram aprovados.
