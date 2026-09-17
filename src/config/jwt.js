const jwt=require("jsonwebtoken");
const User=require("../models/user");

async function verifyToken(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ msg: "Token não fornecido" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({ where: { id: decoded.id } });

        if (!user) {
            return res.status(401).json({ msg: "Usuário não encontrado" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Token inválido" });
    }
}

module.exports = { verifyToken };