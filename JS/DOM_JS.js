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
            let elementsAll = document.querySelectorAll(".grandparent>.parent div");
            console.log(elementsAll);  


//**ESCALANDO EN EL DOM**//
    //Llamar al padre (parentNode)
        elementsAll[2].parentNode.style.backgroundColor = "violet";

    //Llamar a uno de los hijos (children[])
        parent2.children[0].style.backgroundColor="lightblue";

    //Llamar al primer hijo (firstElementChild); llamar al último hijo (lastElementChild)
        parents[0].firstElementChild.style.backgroundColor = "lightgreen";
        parents[1].lastElementChild.style.backgroundColor = "orange"

    //Llamar al hermano anterior (previousElementSibling); llamar al hermano siguiente (nextElementSibling)
        elementsAll[1].previousElementSibling.style.color = "darkgreen";
        elementsAll[2].nextElementSibling.style.color = "darkviolet";


//**MODIFICANDO EL DOM**//
    //Manipulación de propiedades de los elementos
        //PROPIEDAD
            //Cambiar contenido interno de un elemento
                //imprime y reconoce etiquetas HTML
                    element.innerHTML += " <h4>(añadido desde JS)</h4>";
                    element.style.flexDirection= "column";
                //ignora las etiquetas HTML
                    elementsAll[1].textContent = "Texto cambiado"

            //Array de las clases del elemento (classList)
                //añadir una nueva clase
                    parent1.classList.add("flex-column");

                //eliminar una clase existente
                    parent1.classList.remove("flex-column");

                //añade o quita una clase dependiendo de si la tiene o no.
                //para que tenga funcionalidad hay que añadirle un EventListener
                    parent1.classList.toggle("flex-column",false);

            //Cambiar el valor de un atributo (element.indicar_atributo = valor)
                document.querySelector("h1").id = "id_con_JS";
                        //podemos comprobar que se le ha asignado el valor en la consola del navegador
                
            //Cambiar estilos CSS de un elemento desde JS (formato camelCase quitando el guión de la propiedad)
                parent1.style.backgroundColor = "#333";
                
                //se pueden crear funciones para cambiar los estilos
                    const changeTextColor = (element, color, property) => element.style.color = color;
                    changeTextColor(elementsAll[1], "red");

        //METHOD
            //Establece el atributo de un elemento. Si existe lo sobrescribe y si no está, lo crea
                parent1.setAttribute("name", "nombre_parent1");

    //Creación y eliminación de elementos
        //Crear un elemento que aún no está presente en el DOM
            let newDiv = document.createElement("div");
            //es necesario darle propiedades a este div
                newDiv.id = "new-div";
                newDiv.classList.add("child");
                newDiv.textContent = "child 2.5";

        //Elimina un elemento por completo
            document.removeChild

        //Añade un elemento hijo al elemento que le indicamos
            parent1.appendChild(newDiv);

        //Reemplaza un elemento por otro
            document.replaceChild

        //Inserta algo antes de un elemento
            document.insertBefore