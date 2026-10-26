function adminUser(req, res, next) {
    if (req.user && req.user.role === "ADMIN") {
        next();
    } else {
        res.status(403).json({ error: "Acesso negado. Apenas para administradores." });
    }
}

module.exports=adminUser