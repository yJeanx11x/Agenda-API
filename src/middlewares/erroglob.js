function erroGlobal(error,req,res,next){

    return res.status(500).json({msg: "Ocorreu um erro no servidor, tente novamente mais tarde!"})

}

module.exports = erroGlobal