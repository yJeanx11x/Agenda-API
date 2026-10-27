# 📅 Agenda API

API REST para gerenciamento de agendamentos, desenvolvida com Node.js, Express, Sequelize e MySQL. O projeto permite gerenciar usuários, profissionais e agendamentos, aplicando autenticação, controle de acesso e regras de negócio para organizar os horários disponíveis.

O objetivo é desenvolver uma API segura e organizada, aplicando conceitos de desenvolvimento backend, modelagem de banco de dados, relacionamentos e construção de endpoints RESTful.

## 🚀 Tecnologias

- **Node.js** — ambiente de execução JavaScript.
- **Express** — criação de rotas e gerenciamento das requisições HTTP.
- **Sequelize** — ORM para interação com o banco de dados.
- **MySQL** — banco de dados relacional.
- **JWT (JSON Web Token)** — autenticação de usuários.
- **bcrypt** — criptografia de senhas.
- **Zod** — validação de dados.
- **express-rate-limit** — limitação de requisições.
- **dotenv** — gerenciamento de variáveis de ambiente.
- **Postman** — testes manuais dos endpoints.

## 🎯 Funcionalidades

### 🔐 Autenticação

- [x] Cadastro de usuários.
- [x] Login com email e senha.
- [x] Geração de token JWT.
- [x] Middleware de autenticação.
- [x] Proteção de rotas privadas.
- [x] Criptografia de senhas com bcrypt.

### 👤 Usuários

- [x] Consultar perfil.
- [x] Atualizar dados da conta.
- [x] Excluir conta.
- [x] Restringir acesso aos próprios dados.

### 👨‍💼 Profissionais

- [x] Cadastrar profissionais.
- [x] Listar profissionais.
- [x] Buscar profissional por ID.
- [ ] Atualizar informações.
- [x] Excluir profissional.
- [x] Pesquisar profissionais por especialidade.

### 📅 Agendamentos

- [x] Criar agendamentos.
- [x] Listar os agendamentos do usuário autenticado.
- [x] Buscar agendamento por ID.
- [x] Cancelar agendamentos.
- [x] Concluir agendamentos.
- [x] Consultar horários disponíveis.

## 🧠 Regras de negócio

O sistema será desenvolvido com as seguintes regras:

- Somente usuários autenticados poderão realizar agendamentos.
- Cada usuário poderá consultar e gerenciar seus próprios agendamentos.
- Um profissional não poderá ter dois agendamentos no mesmo horário.
- Não será permitido agendar horários no passado.
- Um agendamento deverá estar vinculado a um usuário e a um profissional.
- Agendamentos cancelados não poderão ser tratados como agendamentos ativos.
- Agendamentos concluídos não poderão ser cancelados.
- O status inicial de um agendamento será `AGENDADO`.

## 🗄️ Modelagem do banco de dados

### User

Responsável por armazenar os dados dos usuários.

- `id`
- `nome`
- `email`
- `password`

### Professional

Responsável por armazenar os dados dos profissionais.

- `id`
- `nome`
- `especialidade`
- `telefone`

### Appointment

Responsável por armazenar os dados dos agendamentos.

- `id`
- `data`
- `horario`
- `status`
- `UserId`
- `ProfessionalId`

### Status dos agendamentos

| Status      | Descrição                   |
| ----------- | --------------------------- |
| `AGENDADO`  | Agendamento criado e ativo. |
| `CONCLUIDO` | Atendimento concluído.      |
| `CANCELADO` | Agendamento cancelado.      |

### Relacionamentos

- Um usuário pode possuir vários agendamentos.
- Um profissional pode possuir vários agendamentos.
- Cada agendamento pertence a um usuário.
- Cada agendamento pertence a um profissional.

## 🏗️ Estrutura do projeto

```text
src/
├── app/
│   └── server.js
├── config/
│   └── database.js
├── controllers/
│   ├── userController.js
│   ├── professionalController.js
│   └── appointmentController.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── validationMiddleware.js
│   └── rateLimit.js
├── models/
│   ├── User.js
│   ├── Professional.js
│   └── Appointment.js
└── routes/
    └── routes.js
```

A aplicação segue o padrão **MVC**, separando as responsabilidades entre models, controllers e routes, facilitando a manutenção e a evolução do código.

## 🔗 Endpoints planejados

### Autenticação

| Método | Rota        | Descrição          |
| ------ | ----------- | ------------------ |
| POST   | `/register` | Cadastrar usuário  |
| POST   | `/login`    | Autenticar usuário |

### Usuários

| Método | Rota    | Descrição        |
| ------ | ------- | ---------------- |
| GET    | `/user` | Consultar perfil |
| PUT    | `/user` | Atualizar conta  |
| DELETE | `/user` | Excluir conta    |

### Profissionais

| Método | Rota                 | Descrição              |
| ------ | -------------------- | ---------------------- |
| POST   | `/professionals`     | Cadastrar profissional |
| GET    | `/professionals`     | Listar profissionais   |
| GET    | `/professionals/:id` | Buscar profissional    |
| PUT    | `/professionals/:id` | Atualizar profissional |
| DELETE | `/professionals/:id` | Excluir profissional   |

### Agendamentos

| Método | Rota                         | Descrição                      |
| ------ | ---------------------------- | ------------------------------ |
| POST   | `/appointments`              | Criar agendamento              |
| GET    | `/appointments`              | Listar meus agendamentos       |
| GET    | `/appointments/:id`          | Buscar agendamento             |
| PUT    | `/appointments/:id/cancel`   | Cancelar agendamento           |
| PUT    | `/appointments/:id/complete` | Concluir agendamento           |
| GET    | `/appointments/available`    | Consultar horários disponíveis |

*Os endpoints acima representam o planejamento da API e poderão ser ajustados durante o desenvolvimento.*

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd agenda-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333

DB_NAME=agenda_api
DB_USER=root
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql

SECRET=sua_chave_jwt
```

### 5. Crie o banco de dados

No MySQL, execute:

```sql
CREATE DATABASE agenda_api;
```

### 6. Inicie a aplicação

```bash
npm run dev
```

A aplicação ficará disponível na porta configurada, desde que o script `dev`, a conexão com o banco e as demais configurações estejam definidos corretamente.

## 🧪 Testes

Os endpoints serão testados manualmente utilizando o Postman, verificando:

- [x] Cadastro e login.
- [x] Autenticação com JWT.
- [x] Validação dos dados enviados.
- [x] Operações de cadastro, consulta, atualização e exclusão.
- [x] Criação e cancelamento de agendamentos.
- [ ] Bloqueio de horários já ocupados.
- [x] Controle de acesso aos agendamentos.
- [x] Tratamento de erros e respostas HTTP.

## 🔒 Segurança

- Senhas armazenadas com hash utilizando bcrypt.
- Rotas privadas protegidas por JWT.
- Validação dos dados de entrada.
- Limitação de requisições em endpoints sensíveis.
- Variáveis sensíveis armazenadas em `.env`.
- Controle de acesso aos dados dos usuários.

## 📈 Melhorias futuras

- [ ] Paginação de resultados.
- [ ] Filtros por data e especialidade.
- [ ] Definição de horários de atendimento dos profissionais.
- [ ] Documentação da API com Swagger.
- [ ] Testes automatizados.
- [ ] Docker.
- [ ] Deploy em ambiente de produção.

## 👨‍💻 Objetivo do projeto

Este projeto faz parte da minha evolução como desenvolvedor backend, com foco na construção de APIs REST, autenticação, modelagem relacional, validação de dados, regras de negócio e boas práticas de organização de código.

O desenvolvimento busca consolidar conhecimentos em JavaScript, Node.js, Express, Sequelize e MySQL por meio de uma aplicação prática.

---

**Desenvolvido por [ Jean Lucas ]**

[GitHub](URL_DO_SEU_GITHUB)
