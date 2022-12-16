
/**COMANDOS MySQL**/

    /*GUARDAMOS LA RELACIÓN EN AQUEL ELEMENTO SOBRE EL QUE RECAE EL "MUCHOS"*/

/*TIPOS DE DATOS*/
    
    /*Entero*/
        int /*existen parámetros para delimitar el espacio reservado: tinyint, smallint...*/

    /*Cadena de caracteres, necesitamos indicarle longitud máxima*/
        varchar(32)
    
    /*Número con decimales*/
        float 
    
    /*Fecha*/
        date
   
    /*Fecha y hora*/
        datetime
   
    /*hora*/
        time

    /*Un solo caracter*/
        char

    /*formato binario para enviar imágenes y ejecutables*/
        binary


/*COMANDOS BÁSICOS DESDE CLI*/
    
    /*Salir de MySQL*/
        ^D

    /*Limpiar la pantalla*/
        ^L

    /*Seleccionar una base de datos*/
        USE nombre_base_datos;

    /*Mostrar datos*/
        SHOW;
            /* muestra las bases de datos existentes en el sistema */
                SHOW DATABASES;

            /* mostrar permisos de un usuario*/
                SHOW GRANTS FOR 'nuevo_usuario'@'localhost';

   /*Mostrar estructura de una tabla*/
        DESCRIBE nombre_tabla;


/*DDL (Data Definition Language)*/

    /*Crear contenido (base de datos, tablas, columnas...)*/
        CREATE
            /*Crea una nueva base de datos con el nombre dado */
                CREATE DATABASE nombre;
            /*Crea usuario con contraseña*/
                CREATE USER 'nombre_usuario' IDENTIFIED BY 'contraseña';
        
    /*Modificar y manipular estructura*/
        ALTER;
            /*cambia la contraseña de mySQL que se encuentra en root@localhost y le establece la que ponemos entre comillas */
                ALTER USER root@localhost IDENTIFIED WITH mysql_native_password BY "password";
                
            /*añade una columna a la tabla "sales" con el nombre "date_of_purchase que es de tipo date(le puedo añadir más características)*/
                ALTER TABLE nombre_tabla ADD nombre_nueva_columna DATE;
                    /*Si quiero definir la posición puedo añadir AFTER y el nombre de la columna de referencia o FIRST (al principio de tabla)*/
                        ALTER TABLE nombre_tabla ADD nombre_nueva_columna DATE AFTER price;
           
            /*Elimina columna*/
                ALTER TABLE nombre_tabla DROP COLUMN nombre_columna;
                /*Eliminar una foreign key*/
                    ALTER TABLE bikeshop.repairs DROP FOREIGN KEY fk_costumer_id;

            /*Cambiar el nombre de una columna*/
                ALTER TABLE nombre_tabla CHANGE nombre_antiguo nuevo_nombre VARCHAR(32);

            /*Modifica las propiedades de la columna*/
                ALTER TABLE nombre_tabla MODIFY COLUMN nombre_columna VARCHAR(32);

            /*Renombra la tabla*/
                ALTER TABLE nombre_tabla_antiguo RENAME nombre_tabla_nuevo;

            /**/
                ALTER DATABASE nombe_database READ ONLY = 1

            /**/
                ALTER USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'nueva clave';

            /*Añadir relaciones entre tablas para asignar foreign keys*/
                ALTER TABLE nombre_tabla ADD CONSTRAINT nombre_de_relación FOREIGN KEY (foreign_key) 
                    REFERENCES nombre_otra_tabla (primary_key) ON DELETE CASCADE;

    /*Eliminar objetos de estructura*/
        DROP    
            /*Eliminar una tabla*/
                DROP TABLE nombre_tabla; 
            
            /*Eliminar usuario*/
                DROP USER 'nombre_usuario'@'localhost';
            
            /*Eliminar base de datos*/
                DROP DATABASE nombre_database;

    /*Vaciar contenido de la tabla pero manteniendo la estructura. Vacía también los huecos asignados*/
        TRUNCATE;
          
          /*EJEMPLO CREACIÓN DE TABLA*/
            CREATE TABLE users(
                id int NOT NULL AUTO_INCREMENT,
                name varchar(64) NOT NULL,
                surname varchar (64) NOT NULL,
                login_id int,
                PRIMARY KEY (id), 
                FOREING KEY (login_id) REFERENCES login(id)
            );
       

/*DML (Data Manipulation Language)*/

    /*DML se utiliza para gestionar datos dentro de las tablas*/
    
        /*Obtener registros de una tabla*/
            SELECT 
            /*Seleccionar todos los campos*/
                SELECT * FROM nombre_tabla;
                    /*Especificar los datos que queremos que nos enseñe (en el ejemplo, email, nombre de clientes)*/
                        SELECT email, nombre FROM costumers;

            /*Seleccionar algunos campos*/
                SELECT nombre, apellidos FROM nombre_tabla;

            /*Ordenar los resultados por orden ascendente o descendente*/
                SELECT * FROM nommbre_tabla ORDER BY id DESC;

            /*Mostrar una cantidad concreta de resultados*/
                SELECT * FROM nombre_tabla ORDER BY id ASC LIMIT 1;

            /*Filtrar la consulta para encontrar un valor igual*/
                SELECT * FROM nombre_tabla WHERE id = 1;

            /*Filtrar la consulta para encontrar valores diferente*/
                SELECT * FROM nombre_tabla WHERE id <> 1;

            /*Filtrar la consulta para encontrar un valor menor o igual*/
                SELECT * FROM nombre_tabla WHERE id >= 1;

            /*Filtrar la consulta si cumple una u otra condición*/
                SELECT * FROM nombre_tabla WHERE id >= 1 OR nombre = 'Pedro';

            /*Filtar la consulta si cumple varias condiciones*/
            
                SELECT * FROM nombre_tabla WHERE id >= 1 AND nombre = 'Pedro';

            /*Buscar coincidencias que contengan un texto*/
                SELECT * FROM user_type WHERE nombre LIKE '%pep%';

            /*Devolver un valor número con la cantidad de registros*/
                SELECT COUNT(*) FROM nombre_tabla;

            /*Asignar un alias a una columna*/
                SELECT id as identificador, nombre as como_me_llamo FROM nombre_tabla;

            /*Ejecutar consultas dentro de otras consultas*/
                SELECT nombre, apellidos FROM usuarios WHERE id IN 
                    (SELECT usuario
                        FROM
                            registros
                        WHERE
                            id = 10);

            /*Tablas relacionadas con JOIN*/
                /*Consultar dos tablas unidas por su clave foranea incluyendo solo matches conectadas*/
                    SELECT * FROM nombre_tabla INNER JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;

                /*Todas las filas conectadas y todas las filas sueltas de la tabla de la izquierda (primera). Valores null en las celdas de la otra tabla*/
                    SELECT * FROM nombre_tabla LEFT JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;

                /*Todas las conectadas + las sueltas de la tabla de la derecha*/
                    SELECT * FROM nombre_tabla RIGHT JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;

                /*Todas las conectadas y no conectadas. No en mysql*/
                    SELECT * FROM nombre_tabla FULL JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;
                    
            /*Ejemplo*/
            SELECT name, last_name, brand, price FROM clients left join bikes on bikes.id = clients.bike_id where name="Jane";

        /*Insertar registros en la tabla*/
            INSERT
            /**/
                INSERT INTO nombre_tabla SET id=NULL, nombre='Alfredo';

            /**/
                INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...); 

            /**/
                INSERT INTO nombre_tabla values("value1", "value2");

        /* Modifica datos existentes dentro de la tabla*/
            UPDATE
            /*Actualizar datos*/
                UPDATE nombre_tabla SET nombre = 'Antonio' WHERE id = 1;

        /*Elimina todos los registros de una tabla pero sin eliminar los espacios asignados*/
        /*Borra también relaciones en cascada en ambos casos si la restricción está configurada así*/
            DELETE 
            /*borrar todos los datos de una tabla*/
                DELETE FROM nombre_tabla;
                
            /*borrar un dato*/
                DELETE FROM nombre_tabla WHERE id=1;

/*COMANDOS DE EJEMPLO*/

    INSERT INTO bikes (model, brand, type, price)
                values("ECaliber", "Trek", "Road", 9999);

    INSERT INTO repairs VALUES(NULL, 3, 3, 170, 4);

    UPDATE clients SET phone_number="+34 3231231" WHERE id=1;

    SELECT COUNT(*) FROM bikes WHERE type="Mountain";

    SELECT MAX(price), name FROM parts;

    SELECT * FROM parts WHERE
        price = (SELECT MIN(price) FROM parts);

    DELETE FROM parts WHERE id IN (1, 2);

    SELECT parts.name FROM parts
        JOIN repairs ON repairs.part_id = parts.id
        JOIN clients ON repairs.client_id = clients.id
        WHERE clients.id = 1;

    SELECT model, parts.name, discount FROM bikes
        JOIN clients ON clients.bike_id = bikes.id
        JOIN repairs ON clients.id = repairs.client_id
        JOIN parts ON parts.id = repairs.part_id
        JOIN offers ON offers.part_id = parts.id;





