require("../config/config");

const express = require ("express");
const router  = express.Router();

const Customer = require("../models/customer");

//insertamos bcrypt
    const bcrypt = require("bcrypt");

//insertamos jwt para utilizarlo en el login
    const jwt = require("jsonwebtoken");

router.post("/", (req, res)=> {
    const body = req.body;
    Customer.findOne({email: body.email}, (err, userDB)=>{
        if(err){
            res.status(500).json({ok: false, err});
        }else if(!userDB) {
            res.status(400).json({ok:false, error: "Email not found"})
        }
    //tenemos que comparar la contraseña que llega (sin encriptar) con la que tenemos encriptada en DB
        else if(!bcrypt.compareSync(body.password, userDB.password)){
            res.status(400).json({ok:false, error:"Wrong password"});
        }else{
        //creamos el token guardamos el payload (la info que queremos), y la firma
            const token = jwt.sign(
                //payload
                    {user: userDB},
                //clave secreta
                    process.env.SEED,
                //tiempo de validez (por defecto son segundos)
                    {expiresIn: 20}
            );
            res.status(200).json({ok:true, token, userDB});
        }
    })
})

module.exports = router;