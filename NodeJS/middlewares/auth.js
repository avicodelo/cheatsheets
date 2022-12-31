//Creamos una función para autenticación y la meteremos como middleware

const jwt = require("jsonwebtoken");

//incluimos el next para que sepa que tiene que saltar a la siguiente función
const verifyToken = (req,res,next) => {

        
    //conseguir del headers la propiedad authorization
        let token = req.get("authorization");

    //separar el tipo de token del token real (todos los tokens van precedidos de su tipo)
    //si existe el token, me lo enviará, si no, será undefined
        token = token && token.split(" ")[1];

    //llamamos al verificador del token
        jwt.verify(token, process.env.SEED, (error, payload)=>{
            if(error){
                res.status(401).json({
                    ok: false,
                    error
                })
            }else{
                next();
            }
        })

}

module.exports = verifyToken;