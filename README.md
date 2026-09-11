README DO PROJETO
# 📅 Agenda API

API REST para gerenciamento de agendamentos e consultas.

O sistema permite cadastrar usuários, profissionais e horários, além de criar, consultar, cancelar e concluir agendamentos.

---

# 🚀 Tecnologias

- [x] Node.js
- [x] Express
- [x] Sequelize
- [x] MySQL
- [x] JWT
- [x] bcrypt
- [x] Zod
- [x] Express Rate Limit
- [x] dotenv

---

# 📂 Arquitetura

O projeto utiliza o padrão MVC.

```text
src
│
├── app
│   └── server.js
│
├── config
│   ├── database.js
│   └── jwt.js
│
├── controllers
│   ├── userController.js
│   ├── professionalController.js
│   └── appointmentController.js
│
├── middlewares
│   ├── authMiddleware.js
│   ├── validationMiddleware.js
│   └── rateLimit.js
│
├── models
│   ├── User.js
│   ├── Professional.js
│   └── Appointment.js
│
└── routes
    └── routes.js

👨‍💼 Profissional

Profissional
 id
 nome
 especialidade
 telefone

📅 Agendamento
Appointment
 id
 data
 horario
 status
 UserId
 ProfessionalId
Status
 AGENDADO
 CONCLUIDO
 CANCELADO
🔗 Relacionamentos
 User possui vários agendamentos
 Professional possui vários agendamentos
 Appointment pertence ao User
 Appointment pertence ao Professional
User
 │
 └── hasMany ──> Appointment

Professional
 │
 └── hasMany ──> Appointment

Appointment
 │
 ├── belongsTo ──> User
 │
 └── belongsTo ──> Professional
🔐 Autenticação
 Criar conta
 Login
 Gerar JWT
 Middleware de autenticação
 bcrypt para senha
👤 Usuários
 Criar usuário
 Fazer login
 Visualizar perfil
 Atualizar perfil
 Excluir conta
👨‍💼 Profissionais
 Cadastrar profissional
 Listar profissionais
 Buscar profissional por ID
 Atualizar profissional
 Excluir profissional
📅 Agendamentos
 Criar agendamento
 Listar meus agendamentos
 Buscar agendamento por ID
 Cancelar agendamento
 Concluir agendamento
🚨 Regras de Negócio
 Usuário precisa estar autenticado
 Usuário só pode visualizar seus próprios agendamentos
 Não permitir dois agendamentos no mesmo horário
 Não permitir agendamento em horário passado
 Não permitir agendamento em horário já ocupado
 Não permitir agendamento em consulta cancelada
 Usuário só pode cancelar seus próprios agendamentos
 Agendamento concluído não pode ser cancelado
 Data e horário devem ser obrigatórios
🔎 Consultas
 Listar profissionais
 Buscar por especialidade
 Buscar profissional por ID
 Listar horários disponíveis
 Buscar agendamentos do usuário
🛡️ Segurança
 JWT
 bcrypt
 Rate Limit
 Middleware de autenticação
 Validação com Zod
 dotenv
📬 Rotas
🔐 Auth
 POST /register
 POST /login
👤 Usuários
 GET /user
 PUT /user
 DELETE /user
👨‍💼 Profissionais
 POST /professionals
 GET /professionals
 GET /professionals/:id
 PUT /professionals/:id
 DELETE /professionals/:id
📅 Agendamentos
 POST /appointments
 GET /appointments
 GET /appointments/:id
 PUT /appointments/:id/cancel
 PUT /appointments/:id/complete
🧪 Testes
 Testar cadastro no Postman
 Testar login no Postman
 Testar JWT
 Testar criação de profissional
 Testar criação de agendamento
 Testar cancelamento
 Testar regras de negócio
 Testar erros da API
⚙️ Configuração


# 🔐 Autenticação
- [ ] Criar conta
- [ ] Login
- [ ] Gerar JWT
- [ ] Middleware de autenticação
- [ ] bcrypt para senha

# 👤 Usuários
- [ ] Criar usuário
- [ ] Fazer login
- [ ] Visualizar perfil
- [ ] Atualizar perfil
- [ ] Excluir conta

# 👨‍💼 Profissionais
- [ ] Cadastrar profissional
- [ ] Listar profissionais
- [ ] Buscar profissional por ID
- [ ] Atualizar profissional
- [ ] Excluir profissional

# 📅 Agendamentos
- [ ] Criar agendamento
- [ ] Listar meus agendamentos
- [ ] Buscar agendamento por ID
- [ ] Cancelar agendamento
- [ ] Concluir agendamento

# 🚨 Regras de Negócio
- [ ] Usuário precisa estar autenticado
- [ ] Usuário só pode visualizar seus próprios agendamentos
- [ ] Não permitir dois agendamentos no mesmo horário
- [ ] Não permitir agendamento em horário passado
- [ ] Não permitir agendamento em horário já ocupado
- [ ] Não permitir agendamento em consulta cancelada
- [ ] Usuário só pode cancelar seus próprios agendamentos
- [ ] Agendamento concluído não pode ser cancelado
- [ ] Data e horário devem ser obrigatórios

# 🔎 Consultas
- [ ] Listar profissionais
- [ ] Buscar por especialidade
- [ ] Buscar profissional por ID
- [ ] Listar horários disponíveis
- [ ] Buscar agendamentos do usuário

# 🛡️ Segurança
- [ ] JWT
- [ ] bcrypt
- [ ] Rate Limit
- [ ] Middleware de autenticação
- [ ] Validação com Zod
- [ ] dotenv

# 📬 Rotas
## 🔐 Auth
- [ ] POST /register
- [ ] POST /login

## 👤 Usuários
- [ ] GET /user
- [ ] PUT /user
- [ ] DELETE /user

## 👨‍💼 Profissionais
- [ ] POST /professionals
- [ ] GET /professionals
- [ ] GET /professionals/:id
- [ ] PUT /professionals/:id
- [ ] DELETE /professionals/:id

## 📅 Agendamentos
- [ ] POST /appointments
- [ ] GET /appointments
- [ ] GET /appointments/:id
- [ ] PUT /appointments/:id/cancel
- [ ] PUT /appointments/:id/complete

# 🧪 Testes
- [ ] Testar cadastro no Postman
- [ ] Testar login no Postman
- [ ] Testar JWT
- [ ] Testar criação de profissional
- [ ] Testar criação de agendamento
- [ ] Testar cancelamento
- [ ] Testar regras de negócio
- [ ] Testar erros da API