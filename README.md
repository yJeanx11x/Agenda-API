🔐 Autenticação

[x] Criar conta
[x] Login
[x] Gerar JWT
[x] Middleware de autenticação
[x] bcrypt para senha

👤 Usuários

[x] Criar usuário
[x] Fazer login
[x] Visualizar perfil
[x] Excluir conta

👨‍💼 Profissionais

[x] Cadastrar profissional
[x] Listar profissionais
[x] Buscar profissional por ID
[x] Excluir profissional

📅 Agendamentos
[x] Criar agendamento
[x] Listar meus agendamentos
[x] Buscar agendamento por ID
[x] Cancelar agendamento
[x] Concluir agendamento

🚨 Regras de Negócio

[x] Usuário precisa estar autenticado
[x] Usuário só pode visualizar seus próprios agendamentos
[x] Não permitir dois agendamentos no mesmo horário
[ ] Não permitir agendamento em horário passado
[ ] Não permitir agendamento em horário já ocupado
[ ] Não permitir agendamento em consulta cancelada
[x] Usuário só pode cancelar seus próprios agendamentos
[x] Agendamento concluído não pode ser cancelado
[ ] Data e horário devem ser obrigatórios

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
- [x] Criar conta
- [x] Login
- [x] Gerar JWT
- [x] Middleware de autenticação
- [x] bcrypt para senha

# 👤 Usuários
- [x] Criar usuário
- [x] Fazer login
- [x] Visualizar perfil
- [x] Excluir conta

# 👨‍💼 Profissionais
- [x] Cadastrar profissional
- [x] Listar profissionais
- [x] Buscar profissional por ID
- [x] Atualizar profissional
- [x] Excluir profissional

# 📅 Agendamentos
- [x] Criar agendamento
- [x] Listar meus agendamentos
- [x] Buscar agendamento por ID
- [x] Cancelar agendamento
- [x] Concluir agendamento

# 🚨 Regras de Negócio
- [x] Usuário precisa estar autenticado
- [x] Usuário só pode visualizar seus próprios agendamentos
- [x] Não permitir dois agendamentos no mesmo horário
- [ ] Não permitir agendamento em horário passado
- [ ] Não permitir agendamento em horário já ocupado
- [ ] Não permitir agendamento em consulta cancelada
- [x] Usuário só pode cancelar seus próprios agendamentos
- [x] Agendamento concluído não pode ser cancelado
- [ ] Data e horário devem ser obrigatórios

# 🔎 Consultas
- [x] Listar profissionais
- [ ] Buscar por especialidade
- [x] Buscar profissional por ID
- [ ] Listar horários disponíveis
- [x] Buscar agendamentos do usuário

# 🛡️ Segurança
- [x] JWT
- [x] bcrypt
- [x] Rate Limit
- [x] Middleware de autenticação
- [x] Validação com Zod
- [x] dotenv

# 📬 Rotas
## 🔐 Auth
- [x] POST /register
- [x] POST /login

## 👤 Usuários
- [x] GET /user
- [x] PUT /user
- [x] DELETE /user

## 👨‍💼 Profissionais
- [x] POST /professionals
- [x] GET /professionals
- [x] GET /professionals/:id
- [x] PUT /professionals/:id
- [x] DELETE /professionals/:id

## 📅 Agendamentos
- [x] POST /appointments
- [x] GET /appointments
- [x] GET /appointments/:id
- [x] PUT /appointments/:id/cancel
- [x] PUT /appointments/:id/complete

# 🧪 Testes
- [x] Testar cadastro no Postman
- [x] Testar login no Postman
- [x] Testar JWT
- [x] Testar criação de profissional
- [x] Testar criação de agendamento
- [x] Testar cancelamento
- [x] Testar regras de negócio
- [x] Testar erros da API