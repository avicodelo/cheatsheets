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
        const grandParent = document.getElementById("grandparent");
        console.log(grandParent);

    //Selección por etiqueta HTML 
        //El output es un HTMLCollection (diferente a un array)
            const family = document.getElementsByTagName("div");
            console.log(family);

        //Para acceder a los elementos, tenemos dos maneras
            // 1) parseando el iterable HTMLColl. y aplicando forEach
                Array.from(family).forEach(item => console.log(item));

            // 2) directamente con for...of
                for (let familyMembers of family){
                    console.log(familyMembers);
                }

    //Selección por clase (me dará varios elementos en un array)
        //El output es un HTMLCollection (diferente a un array)
            const parents = document.getElementsByClassName("parent");
        //Guardar los diferentes elementos en constantes 
            // similar a const parent1 = parents [0]
                const parent1 = document.getElementsByClassName("parent")[0];
            // similar a const parent2 = parents [1]
                const parent2 = document.getElementsByClassName("parent")[1];


    //Selección por un selector completo
        //Se puede aplicar cualquier selector igual que en css
        //Sólo coge el primer elemento que coincida la indicación 
            let element = document.querySelector(".grandparent>.parent>#child4");
            console.log(element);

        //Coge todos los elementos que coincidan
            let elementAll = document.querySelectorAll(".grandparent>.parent div");
            console.log(elementAll);  


//**MODIFICANDO EL DOM**//
    //Aplicar estilos CSS desde JS (se suprimen los guiones de las propiedades CSS)
        parent1.style.backgroundColor = "#333";