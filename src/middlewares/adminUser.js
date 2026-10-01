function adminUser(req, res, next) {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ error: "Acesso negado. Apenas para administradores." });
    }
}

module.exports=adminUser