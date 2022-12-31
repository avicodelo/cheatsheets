/*EXPORTAR DATOS EN NODE*/
    //Opción integrada
        module.exports.getUser = (id) => {
            let user = id;
            return user;
        };

    //Opción desacoplada
        const getPass =(pass) => {return pass*Math.random}
        module.exports = {getPass};

/*IMPORTAR DATOS*/
    //Recibir módulos de otro lugar. Puede recibir tanto funciones como archivos con módulos
        const http = require("http");

/*MONTAR UNA API CON EXPRESS. SEGUIR MÉTODO CRUD (create, read, update, delete) */
    //Establecemos las constantes. 
        const express = require("express");
        const app = express();
    
    //Importamos el documento con las variables de entorno
        require("./config/config");

    //Importarmos mongoose
        const mongoose = require("mongoose");

    //Configuramos mongoose con los comandos que se necesiten
        mongoose.set('strictQuery', false);

    //Conectamos mongoose con mongo indicando la ruta
        mongoose.connect("mongodb://localhost:27017/users");

    //Guardamos la conexión en una constante
        const db = mongoose.connection;

    //Aplicamos funciones a db. Una de error tantas veces ocurra (on) y otra de apertura la primera vez (once)
        db.on("error", (err)=> console.log("Conection to DB has failed", err));
        db.once("open", () => console.log("Conection successful"));
    
    //Importamos el documento con los endpoints
        const users = require("./routes/users");
        const customers = require("./routes/customers");
        const login = require("./routes/login");

    //Antes de los endpoints hacemos uso de los middlewares
        //Transforma json en un objeto para poder hacer uso de las propiedades
            app.use(express.json());

    //Especificamos la ruta que se va a seguir en el router (lo tenemos guardado en una variable)
        app.use("/users", users);
        app.use("/customers", customers);
        app.use("/login", login);

    //Ordenar al servidor que se quede a la escucha. Indicarle un puerto. 
    //El 2º argumento es la acción cuando se levante el server (no es necesario incluirlo)
        app.listen(process.env.PORT)