    const express = require("express");
    const router = express.Router();

//Importamos el encriptador de contraseñas
    const bcrypt = require ("bcrypt");

//Importamos el archivo con el modelo
    const Customer = require("../models/customer");

//Importamos los middlewares
    const verifyToken = require("../middlewares/auth");

/*POST */
    router.post("/", (req, res) => {
        //creamos la variable body
            let body = req.body;

        //creamos nuevo customer
            const customer = new Customer({
                username: body.username,
                email: body.email,

            /*En el campo de contraseña usamos el encriptador indicándole la entropía (por defecto 10)*/
                password: bcrypt.hashSync(body.password, 10)
            });

        //guardamos el customer en la base de datos. Podemos darle feedback al cliente
            customer.save((error, savedCustomer) => {
                if (error) {
                    res.status(400).json({
                        ok: false,
                        error
                    });
                } else {
                    res.status(201).json({
                        ok: true,
                        savedCustomer
                    })
                }
            });
        });

        
/*GET */
        //necesitamos añadir "async" a la función para indicar posteriormente las queries asíncronas
        //insertamos el middleware en mitad de los parámetros
    router.get("/", verifyToken ,async (req, res) => {
        //para pasar información por la url tiene la forma "?name=value"
        //capturar la info de la url (en caso de que no la pasen, valdrá 1)
            const page = req.query.page || 1;
            const PAGE_SIZE = 2;

    
        //contar número total de registros (SIEMPRE que va a buscar info a otro sitio es asíncrona)
        //necesitamos añadir await
            const numCustomers = await Customer.estimatedDocumentCount();
        
        //Indicar el tipo de modelo donde ha de buscar
        //Si find está vacío, devolverá todos los registros. En este caso devolverá los usuarios activos
           Customer.find({active: true})
            
        //añadimos .skip().limit() para paginar 
            .skip(page*PAGE_SIZE-PAGE_SIZE) // igual a: page_size*(page-1)
            .limit(PAGE_SIZE)
        
        //añadimos la función que tendrá lugar tras conseguir los datos
            .exec((error, customers) => {
                if (error) {
                    res.status(400).json({
                        ok: false,
                        error
                    });
                } else {
                    res.status(200).json({
                        ok: true,
                        numCustomers,
                        customers
                    });
                }
            })
    });

/*PUT */
    router.put("/:id", (req, res)=> {
        const id = req.params.id;

    //Se puede desglosar el objeto para darle seguridad a la BD e impedir que cambien otras propiedades como "role"
        const {username, email, password} = req.body;
        const body = {username, email, password};

    //encontrar el usuario por su id y actualizarlo. Hay que pasarle parámetros
        Customer.findByIdAndUpdate(
            id, 
            body, 
            //settings. Tiene que ser un objeto
                {
                //en la respuesta, devuelve el objeto nuevo actualizado
                    new: true,
                //que se mantenga la validación establecida en el schema
                    runValidators: true,
                },
            (err, updatedCustomer) => {
                if (err){
                    res.status(400).json({ok:false, err})
                }else {
                    res.status(200).json({ok:true, updatedCustomer})
                }
            }); 
    })

/*DELETE */
    router.delete("/:id", (req, res)=> {
        const id = req.params.id;
    
    /*Opción 1: eliminar al usuario por completo */
        /* Customer.findByIdAndDelete(id,{}, 
            (err, removedCustomer)=>{
                if(err){
                    res.status(400).json({ok:false, err})
                }else{
                    res.status(200).json({ok:true, removedCustomer})
                };
            }); */

    /*Opción 2: actualizar el usuario y poner "active:false" */
        Customer.findByIdAndUpdate(id, {active: false}, 
            {
                new: true,
                runValidators: true
            }, 
            (err, removedCustomer)=>{
                if(err){
                    res.status(400).json({ok:false, err})
                }else if(!removedCustomer){
                    res.status(400).json({ok:false, error: "User not found"})
                }else{
                    res.status(200).json({ok:true, removedCustomer})
                }
            })
    });

    module.exports = router;