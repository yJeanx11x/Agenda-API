const retelimit = require("express-rate-limit");

const rateLimit = retelimit({
    windowMs: 10 * 60 * 1000,
    max:4,
    message: "Muitas tentativas de login, tente novamente mais tarde"
})

module.exports = rateLimit;