const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const z = require("../schemas/validacaoUser");

async function register(req, res, next) {
  const validacao = z.safeParse(req.body);
  const senhaHas = await bcrypt.hash(validacao.data.password, 12);

  try {
    User.create({
      nome: validacao.data.nome,
      email: validacao.data.email,
      password: senhaHas,
    });
    return res.status(201).json({ msg: "Sua conta foi criada com sucesso! " });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  //   const validacao = z.safeParse(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ msg: "Email não cadastrado " });
    }

    const verificarSenha = await bcrypt.compare(password,user.password);
    if (!verificarSenha) {
      return res.status(401).json({ msg: "Senha Invalida" });
    }


    return res.status(201).json({ msg: "login com sucesso !" });
  } catch (error) {
    next(error);
  }
}
module.exports = { register, login };
