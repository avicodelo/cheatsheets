/*-----------------------------CONCEPTOS BÁSICOS DE JS-------------------------------------------*/


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


//**OPERADORES LÓGICOS**//
    //Comparación igualdad
        2 == "2"
            // output = true

    //Comparación estrictamente igual (igual en tipo y valor)
        2 === "2"
            // output = false
    
    //Comparación desigualdad
        3 != "3"
            // output = false

    //Comparación estrictamente desigual
        3 !== "3"
            // output = true

    //Comparación mayor (>), menor (<), mayor igual (>=), menor igual (<=)
        5 >= 3
            // output = true

    //Operador "y"
        true && true
            // output = true
            
    //Operador "o"
        false || true
            // output = true

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


//**ARRAYS**//
    //declara e inicializa un array
        let miArray = ["red", "blue"];

    //longitud del array
        miArray.length;
                    // output = 2
    
    //introducir nuevo dato al final del array sin usar funciones
        miArray[2] = "green";
        miArray[miArray.length] = "violet";

    //añadir elementos al final del array con funcion
        miArray.push("orange");

    //añadir elementos al principio de un array
        miArray.unshift("orange", "grey");
    
    //eliminar el último elemento del array
        miArray.pop();

    //eliminar el primer elemento del array
        miArray.shift();

    //imprimir el nuevo array
        console.log(miArray);
                    // output = ["grey", "red", "blue", "green", "violet"]

    //conocer el índice del elemento. Si no existe el elemento, devuelve un -1
        miArray.indexOf["red"];
                    // output = 1

    //Devolver los elementos de un array comprendidos entre dos índices sin incluir el último
        miArray.slice(1, 3);
                    // output = ["red", "blue"]

    //Borrar elementos del array. Primer número es donde empieza a borrar y el segundo el número de elementos
        miArray.splice(1, 3);
                    // output = ["red", "blue", "green"] (para ver los elementos eliminados hay que meter la función en console.log())
        console.log(miArray);
                    // output = ["grey", "violet"]

    //Ordenar elementos del array por orden alfabético. Para determinar el modo de ordenarlo, introducir una función
        miArray.sort();
        miArray.sort((a,b) => a-b);

    //Filtrar un array. Devuelve un array con los elementos filtrados por la función (la función tiene que devolver un booleano)
        miArray.filter(element => element > 5);


    //Mapear un array. Recorre un array y devuelve los elementos indicados en la función
        miArray.map(element => element.property);

    //Unifica los elementos de un array. Hay que introducirle el valor previo y el que se quiere añadir
        miArray.reduce((suma, parametro2) => suma + parametro2, 0)

    //invertir el array
        miArray.reverse();

    //unir los elemenetos del array en un string (indicarle el separador que queremos aplicar)
        miArray.join("");


//**OBJETOS**//
    //Devuelve los valores de las propiedades de un objeto en forma de array
        Object.values(nombreObjeto);

    //Devuelve los nombres de las propiedades de un objeto en forma de array
        Object.keys(nombreObjeto);

    //Devuelve un array donde cada elemento es otro array que tiene dos datos: el nombre y el valor de la propiedad
        Object.entries(nombreObjeto);
                    // output = [["prop1","valor1"], ["prop2", "valor2"], ...]

    //Copias de objetos
        //Shallow. Copia superficial de las propiedades de primer nivel
            //forma antigua
                let copy1Old = Object.assign({}, obj1);

            //forma moderna (también válida para arrays)
                let copy1New = {...Car};

        //Deep. Copia profunda de todas las propiedades de un objeto
            let copy2 = JSON.parse(JSON.stringify(obj1));
        

//**CONSTRUCTORES**//
    //Forma antigua de construir objetos mediante funciones (antes de ES6)
        //Crear un constructor de objeto
            function Car(brand, color, maxSpeed){
                this.brand = brand;
                this.color = color;
                this.maxSpeed = maxSpeed;
                this.increaseSpeed= function(){
                    return this.maxSpeed +=50;
                };
            };

        //Crear un nuevo objeto con la plantilla
            let car1 = new Car("Mercedes", "red", 300);
            let car2 = new Car("BMW", "blue", 500);

        //Añadir una propiedad o método a un elemento en concreto
            car1.reduceSpeed = function(){
                return this.maxSpeed -= 50;
            };

        //Añadir una propiedad o método al prototipo de objetos
        //Si algún objeto ya posee ese mismo método o propiedad, no lo hereda y obtiene el valor que se le ha introducido específicamente
            Car.prototype.minSpeed = function (){
                return this.maxSpeed -= 200;
            };
            console.log(car2.minSpeed());

        //Añadir un subojeto dependiente de otro (herencia) que tendrá las propiedades del padre y las suyas propias
            function Sport (brand, color, maxSpeed, nDoors){
                Car.call(this, brand, color, maxSpeed)
                this.nDoors = nDoors;
                this.trunk = false;
            };

        //Unificar los prototipos en la herencia
            Sport.prototype = Object(Car.prototype);

    //Forma nueva de crear objetos mediante clases (ES6)
        //Crear la clase
            class Book{
                //las propiedades se establecen en el constructor
                    constructor(title, author, year, pages){
                        this.title = title;
                        this.author = author;
                        this.year = year;
                        this.pages = pages;
                        this.created = 1980;
                    };
                //las funciones van fuera del constructor
                    getSumary(){
                        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
                    };
                    getType(){
                        console.log(`Common book`);
                    };

                //existen funciones estáticas que no dependen de elementos de la clase
                    static timeToRead (libro, speed){
                        return `Necesitarás ${libro.pages / speed} días para leer el libro`;
                    }
            };

        //Crear nuevo objeto
            const book1 = new Book("Metamorfosis", "Franz Kafka", 1915, 300);
                console.log(book1);
                book1.getSumary();
                console.log(Book.timeToRead(book1, 10));

        //Establecer herencia con función polimórfica (misma función con diferente acción)
            class Magazine extends Book{
                getType(){
                    console.log("Magazine");
                };
            };
            
        //Objeto magazine
            const maga1= new Magazine ("Super Pop", "Alguien", 2010, 30);
                console.log(maga1);

        //Otra clase para modificar datos del padre
            class Comic extends Book{
                constructor(title, year, type, pages){
                    super(title, "Stan Lee", year, pages)
                    this.type = type;
                }

                //llamar a un método para ampliar información
                    getType(){
                        console.log("It isn´t a "), super.getType();
                    };
            };
        
        //Objeto comic
            const comic1 = new Comic ("Spiderman", 1998, "superheroes", 131);
                console.log(comic1);
                comic1.getType();

//**COMANDOS VARIOS**//
    //nos da como output el tipo de dato que es la variable que le sigue, en este caso num1.
        typeof num1;  
                // output: number
            
    //is Not a Number. Usado para comparaciones. NaN = Not a Number
        isNaN(str); 
                // output = true

    //potencia de un número
        Math.pow(4, 2);
                // output = 16

    //número aleatorio entre 0 y 1
        Math.random();

    //Trunca el número a su entero
        Math.floor(3.58);

    //This: hacer referencia al elemento al que pertenece
        let ejemploThis = {
            name: "Rodolfo",
            talk() {
                console.log(this);
                            //output = {name: "Rodolfo", talk()}
                console.log(`Me llamo ${this.name}`);
                            // output = "Me llamo Rodolfo"
            }
        };
        ejemploThis.talk();

    //indica el valor de un elemento
        elemento.value;


//**FUNCIONES**//
    //Nombradas
        //Crear la función
            function suma (num1, num2) {
                //devolver un resultado
                return num1 + num2;
            };

        //Llamar a la función
            suma (2, 5);
                    // output = 7

    //Anónimas
        //aquellas que no tienen nombre. Las podemos guardar en una variable o incrustarlas dentro de otra función
            //En variable
                const anonimus = function () { return "Hola anónimo"};
            //En función
                miArray.sort(function (a,b) { return a-b });
        //Flecha
            //funciones sencillas que "function" y "return" se cambian por una flecha
                const area = (ancho, alto) => ancho * alto;
                console.log(area(6,3));


//**CONDICIONALES Y BUCLES**//
    //Condicionales
        if (num1 > num2) {
            console.log(num1);
        } else if (num1 == num2) {
            console.log(num1, " ", num2);
        } else {
            console.log(num2);
        }

        //Abreviatura de condición if-else (operador ternario)
            //condición    //si es true         //si es false
            num1 >= num2 ? console.log(num1) : console.log(num2);

            //ejemplo
                let isMember = false;
                console.log("La cuota es de: " + (isMember ? "2.00€" : "10.00€"));

    //Opcionales (uso desaconsejado)
        switch (option) {
            case 1:
                //bloque de código
                break;
            case 2:
                //bloque de código
                break;
            case 3:
                //bloque de código
                break;
            default:
                //se ejecutará esta acción si ninguna de las anteriores se ejecutó
        }

    //Bucle while
        while (condition) {
            //bloque de código
        };

    //Bucle for
        //Tipo 1 (for)
                //iniciamos i   //valor máximo de i    //contador de i
            for (let i = 0;      i <= 10;               i++) {
                //bloque de código
            };

        //Tipo 2 (for...of) (uso para elementos iterables. Coge cada item del iterable)
            let arrayFor= [1,3,5,7];
            for (const item of arrayFor){
                console.log(item);
            };

        //Tipo 3 (for...in) (uso para objetos)
            let obj ={name:"Periquito", edad: 27};
            for (const property in obj){
                console.log(property, obj[property]);
            }   
                        // output: name Periquito
                                // edad 27 
            
        //Tipo 4 (for...each) (exclusivo para arrays. Recorre cada uno de los items del array)
            let array= [2,4,6,8];
                                //dato del array  //índice del array
            array.forEach(function(    item,            index){
                console.log(`El elemento ${index} : ${item}`);
            });

            array.forEach((item,index)=> console.log(`El elemento ${index} : ${item}`));

            //si no necesito el dato del array, le ponemos un guión bajo
                array.forEach(function(_item, index){
                    console.log(index);
                });

    //*Elementos de control de bucles
        //finalizar el bucle en el momento que yo determine (break)
        //le podemos dar etiquetas a los bucles
            mainLoop: while(true){
                while (true){
                    console.log("Entró en el bucle interno");
                    //romperá el bucle de fuera ya que le hemos especificado la etiqueta
                        break mainLoop;
                }
            }

        //continuar con el bucle a la siguiente iteración (continue)
            for(let i=0; i<=5; i++ ){
                //no procesará el número 3
                    if (i===3){
                        continue;
                    }
                    console.log("Usando 'continue': ", i );
            };
