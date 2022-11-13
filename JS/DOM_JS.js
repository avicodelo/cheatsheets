/*-----------------------------CONTROLANDO EL DOM DESDE JS-------------------------------------------*/


//**INICIO AL DOM**//
    //características del documento
    console.log(document);

    //dominio del documento
        console.log(document.domain);

    //url del documento
        console.log(document.URL);

    //manejo del título del documento
        document.title += " (añadido desde JS)";
        console.log(document.title);

    
//**ACCESO AL DOM**//
    //Selección por ID (me dará un unico elemento)
        document.getElementById("mainTable");

    //Selección por etiqueta HTML (me dará varios elementos en un array)
        const family = document.getElementsByTagName("h1");
        console.log(family);

    //Selección por clase (me dará varios elementos en un array)
        document.getElementsByClassName("container");

    //Selección por un selector completo
        document.querySelector("a.mainlink");