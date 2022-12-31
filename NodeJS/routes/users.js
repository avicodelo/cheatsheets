/* HACER UNA CARPETA APARTE PARA CADA ENDPOINT CON SUS MÉTODOS*/

    //Importar express
        const express = require("express");

    //Hacer uso de un componente de express necesario para enrutar
        const router = express.Router();

    //Introducir la lógica del servidor. Indicar los métodos, la ruta ("/") y la callbackFn (req,res)=>{}
        //Método GET. Permite obtener un recurso de una URL
        router.get("/", (req, res) =>{ 
            //Enviar texto
                res.send("Hola a todos");
            //Enviar json
                res.json({"message" : "Enviando json"});
        });

    //Método POST. Permite el envío de información del cliente hacia el servidor
        router.post("/", (req, res) =>{ 
            //Recibir el body de la petición y guardarlo en una variable
                let body = req.body;
            //Enviar json con propiedades del body
                
            //Validar si se ha recibido una propiedad en concreto
                if (body.name){
                    //se puede indicar el estado de la petición
                        res.status(200).json({
                            "message" : "Haciendo POST con status 200",
                            "validation" : `Recibido usuario: ${body.name}`
                        });
                }else {
                    res.status(400).json({
                        "ok": false,
                        "message" : "Haciendo POST con status 400",
                        "validation" : `Usuario obligatorio`
                    });
                }
        });

    //Método PUT. Permite el envío de información del cliente hacia el servidor con la
                //diferencia que se utiliza para actualizar un registro de la BD.
        router.put("/:id", (req, res) =>{ 
            //capturar el id con params
                res.json(`PUT user ${req.params.id}`);
        });

    //Método DELETE. Borrar un registro de la base de datos
        router.delete("/:id", (req, res) =>{ 
            res.json("DELETE user");
        });

    //Exportamos los componentes router
        module.exports = router;