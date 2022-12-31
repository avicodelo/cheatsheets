/*Es necesario crear los esquemas de mongoose para tipar los collections */
/*Tendremos un schema diferente por cada collection y los iremos introduciendo en archivos diferentes que serán los diferentes modelos */

//Llamamos a mongoose
    const mongoose = require("mongoose");

//Importamos el validador de errores    
    const uniqueValidator = require("mongoose-unique-validator");

//Llamamos a la función schema
    const Schema = mongoose.Schema;

//Guardar en una constante el setting del uso de virtuals para que se pueda utilizar en JSON
//Introduciremos la constante más tarde en el schema
    const opts = { toJSON: { virtuals: true } };

//Si utilizamos alguna restricción con valor predeterminado podemos delimitar los posibles valores y crear un mensaje
    const validroles = {
        values: ["ADMIN", "USER"],
        messages:"{VALUE} is not a valid role"
    }

//Creamos nuestro modelo para usuario y le introducimos las propiedades
    const customerSchema = new Schema ({
        username: {
            //tipo de datos que espera
                type: String,

            //si es requerido o no. Indicar el mensaje en caso de que sea true y no se cumpla    
                required: [true, "Username is required"]
        },
        email:{
            type: String,

            //indicamos que sea único y no se repitan emails en la base de datos
                unique: true,

            required: [true, "Email is required"]
        },
        password:{
            type: String,
            required: [true, "Username is required"]
        },
        role:{
            type: String,

            //valor por defecto
                default: "USER",
                
            //delimitamos los valores con la constante establecida anteriormente
                enum: validroles
        },
        active:{
            type: Boolean,
            default: true
        }
    }, opts);

//Añadir información virtual que no se guarda en la base de datos (en este caso guardaría nombre+email)
    customerSchema.virtual('giveData').get(function() {
        return this.username + this.email;
      });


//Controlar los campos que devuelve la respuesta cuando parseamos a JSON
    customerSchema.methods.toJSON = function (){
        //parseamos la info que nos entra a objeto
            const user = this.toObject();
        //borramos la(s) propiedad(es) que no queremos que se vean una vez guardadas
            delete user.password;
        //devolvemos el usuario "limpio"
            return user;
    }

//Insertamos el plugin del validador de errores
    customerSchema.plugin(uniqueValidator,{message: "{PATH} should be unique"});

//Exportamos la información
    module.exports = mongoose.model("Customer", customerSchema);