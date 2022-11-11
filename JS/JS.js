
/*Diferencia entre propiedad y método
    propiedad: es una característica del objeto y el output es un dato
    método: es una función del objeto y el output es una acción. Al ser una función tiene que ir seguido de paréntesis*/


//**SIGNOS DE PUNTUACIÓN**//

    //introducir un string (intercambiable con la comilla simple)
        ""  
    //introducir un string (intercambiable con la comilla doble)
        '' 
    //introducir un string con variables. Las variables se indican: ${x} donde x es la variable
        ``  
    //utilizamos el punto para apuntar a una propiedad de un objeto 
        .property 


//**VARIABLES Y CONSTANTES**//
    //variable que tiene el "scope" de función (se arrastra hasta el final del código y tiene propiedad de hoisting).
    // Se puede definir e inicializar a la vez. En desuso
        var y = 4; 
        
    //variable que tiene el "scope" de bloque (se arrastra únicamente dentro del paquete de código donde se crea, ej: bucle).
    //Se puede definir e inicializar a la vez. Es el estándar    
        let x = 3;

    //se pueden definir las variables pero inicializar más tarde
        let hour, min, seconds; 

    //crea una constante cuyo valor no va a cambiar ("scope de bloque"). 
    //Usarlo siempre, a no ser que vayamos a necesitar cambiar su valor.    
        const q = 1;
                    

//**TIPOS DE DATOS**//
    //Primitivos
        //números
            let myNumber= 5; 

        //string (cadena de texto). " "
            let myString = "Hola a todos";

        //booleano (true o false)
            let myBoolean = true; 
        
        //indefinido    
            let undef; 

        //nulo. Se utiliza para limpiar/resetear la variable    
            let miVariable = null; 

    //Objetos
        //Objetos. { }
            //los creamos poniendo detrás del "=" las llaves
            //sus propiedades/métodos se indican dentro de las llaves con los valores correspondientes y separados con comas. No poner "," en el último elemento
                const person = {
                    name: "Jack",
                    surname: "Daniels",
                    age: 26
                };
                
            //acceso a las propiedades con punto
                person.name; 
                        // output = "Jack"

            //la forma alternativa de acceso a las propiedades/métodos es con corchetes
            //se usa cuando tenemos el calificativo de dicha propiedad dentro de una variable
                const apodo = "surname";
                person[apodo]; 
                        // output = "Daniels"

            //cambiar una propiedad del objeto
                person.name = "chivas";

            //añadir una propiedad que no existe. Únicamente tenemos otorgarle un nombre a esa propiedad con el método del punto y darle un valor
                person.country = "España"; 

            //establecer métodos en objetos
                const personAccion = {
                    //pre ES-6+ (ANTIGUO)
                        walk: function() {
                            console.log("Estoy caminando");
                        },

                    //ES-6+
                        jump() {
                            console.log("Estoy saltando");
                        }
                }

            //acceder a los métodos con el punto. Recordar los paréntesis del método
                personAccion.jump();

        //Arrays. [ ]
            //Cadena de datos que pueden ser de varios tipos
                let array1 = Array(1, "string", 6);
           
            //otra forma de crear un array (usar corchetes). El valor de las posiciones es: array[0]=2; array[1]=4; array[2]=6
                let array2 = [2, 4, 6];
           
            //usa un array para darle valor a las variables. var1=2; var2=4; var3=6
                let [var1, var2, var3]=[2, 4, 6]; 
        
        //Miscellaneous
            //para indicar fechas
                Date;

            //para indicar errores
                Error; 


//**DEBUG**//
    //nos aparecerá en la consola del navegador el valor de x. Sirve para detectar fallos y crear registro de datos
        console.log(x);

    //limpia la consola eliminando los datos que están escritos
        console.clear(); 

    //aparecerá una ventana emergente con la información que le indicamos entre paréntesis
        alert("mensaje", variable); 


//**STRINGS**//
    //declara e inicializa un string
        let str = "Hola mundo";

    //longitud del string
        str.length;

    //posición de la primera vez que aparece un substring dentro del string padre
        str.indexOf("mundo"); 
                // output = 5

    //si no existe el substring que estoy buscando, el output será -1
        str.indexOf("ordenador");
                 //output = -1

    //posición de la última vez que aparece un substring dentro del string padre
        str.lastIndexOf("o"); 
                //output = 9

    //posición de la última vez que aparece un substring dentro del string padre pero dándole de referencia una posición
        str.lastIndexOf("o", 5);
                 //output = 1

    //devuelve una subcadena formada por letras que están entre dos posiciones
        str.substring(2,6);
                //output = "la m"

    //une dos string
        str.concat(". Adiós amigos"); //output = "Hola mundo. Adiós amigos"

    //unir dos strings con operador "+"
        console.log(str + ". Adiós amigos"); 
                //output = "Hola mundo. Adiós amigos"

    //unir dos strings y guardarlos en la misma variable
        str += ". Adiós mundo"; 
                // output str = "Hola mundo. Adiós mundo"

    //cambia el primer substring (si existe) por otro
        str.replace("mundo", "amigos"); 
                // output str = "Hola amigos. Adiós mundo"

    //cambia todos los substrings (si existen) por otro
        str.replaceAll("mundo", "amigos"); 
                // output str = "Hola amigos. Adiós amigos"

    //cambiar string a mayúsculas
        str.toUpperCase();

    //cambiar string a minúsculas
        str.toLowerCase();


//**COMANDOS VARIOS**//
    //nos da como output el tipo de dato que es la variable que le sigue, en este caso num1.
        typeof num1;  
                // output: number
            
    //is Not a Number. Usado para comparaciones. NaN = Not a Number
        isNaN(str); 
                // output = true



