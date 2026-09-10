# 📅 Agenda API

API REST para gerenciamento de agendamentos e consultas.

O sistema permite cadastrar usuários, profissionais e horários, além de criar, consultar, cancelar e concluir agendamentos.

---

# 🚀 Tecnologias

- [x] Node.js
- [x] Express
- [ ] Sequelize
- [ ] MySQL
- [ ] JWT
- [ ] bcrypt
- [ ] Zod
- [ ] Express Rate Limit
- [ ] dotenv

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