require("dotenv").config();
const User  = require("../models/user");
const bcrypt = require("bcrypt");
const z = require("../schemas/validacaoUser");
const jwt = require("jsonwebtoken");

async function register(req, res, next) {
  const validacao = z.safeParse(req.body);
  const senhaHas = await bcrypt.hash(validacao.data.password, 12);

  try {
   await User.create({
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
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ msg: "Email ou senha inválidos " });
    }

    const verificarSenha = await bcrypt.compare(password, user.password);
    if (!verificarSenha) {
      return res.status(401).json({ msg: "Email ou senha inválidos" });
    }
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      secret,
      { expiresIn: "1h" },
    );
    user.token = token;
    await user.save();
    return res.status(200).json({ msg: "login com sucesso !", token: token });
  } catch (error) {
    next(error);
  }
}

async function userPerfil(req, res, next) {
  try {
    const user = await User.findOne({
      where: req.user.id,
      attributes: ["id", "nome", "email"],
    });

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

async function deletePerfil(req, res, next) {
  try {
    const user = await User.findOne({ where: req.user.id });
    if (!user) {
      return res.status(401).json({ msg: "Usuario não Listado" });
    }
    user.destroy();
    return res.status(200).json({ msg: "Usuario deletado com sucesso!" });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login, userPerfil, deletePerfil };
