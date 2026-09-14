const z = require("zod");

const validacao = z.object({
  nome: z
    .string({ error: "O nome é obrigatório." })
    .min(3, "O nome deve conter no mínimo 3 caracteres."),
  email: z.string({ error: "O e-mail é obrigatório." }),
  password: z
    .string({ error: "A senha é obrigatória." })
    .min(6, "A senha deve conter no mínimo 6 caracteres."),
});

module.exports = validacao;
