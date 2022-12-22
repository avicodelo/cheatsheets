
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
            /*formato de fecha*/
                YYYY-MM-DD
            /*extraer algunos de los parámetros por separado*/
                YEAR(nombre_columna);
                MONTH(nombre_columna)
                DAY(nombre_columna);
   
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

            /*Mostrar la lista de procesos activos de las bases de datos*/
                SHOW PROCESSLIST;

            /*Matar un proceso abierto*/
                KILL id_sesion;

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
                    /*Se puede especificar la tabla de la que queremos ver todos los datos. Útil cuando juntamos varias tablas*/
                        SELECT nombre_tabla.* from nombre_tabla;

            /*Especificar los datos que queremos que nos enseñe (en el ejemplo, email, nombre de clientes)*/
                SELECT email, nombre FROM nombre_tabla;

            /*Establecer un límite de registros mostrados (en este caso 4)*/
                SELECT * FROM nombre_tabla LIMIT 4;

            /*Seleccionar datos con id iguales a la lista establecida después de IN*/
                SELECT * FROM nombre_tabla WHERE id IN (1,2,3);

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
                SELECT * FROM nombre_tabla WHERE nombre LIKE '%pep%';

            /*Devolver un valor número con la cantidad de registros*/
                SELECT COUNT(*) FROM nombre_tabla;

            /*Devolver la media de los registros*/
                SELECT AVG(nombre_columna) FROM nombre_tabla;

            /*Devolver la suma de los registros*/
                SELECT SUM(nombre_columna) FROM nombre_tabla;

            /*Devolver el valor máximo de los registros*/
                SELECT MAX(nombre_columna) FROM nombre_tabla;

            /*Devolver el valor mínimo de los registros*/
                SELECT MIN(nombre_columna) FROM nombre_tabla;

            /*Devolver diferencia de fechas. Resta primera menos segunda*/
                SELECT DATEDIFF(fecha_1, fecha_2) FROM nombre_tabla;

            /*Asignar un alias a una columna*/
                SELECT id as identificador, nombre as como_me_llamo FROM nombre_tabla;
                /*opción alternativa: poner un espacio*/
                    SELECT id identificador, nombre como_me_llamo; 

            /*Ejecutar consultas dentro de otras consultas*/
                SELECT nombre, apellidos FROM usuarios WHERE id IN 
                    (SELECT usuario
                        FROM
                            registros
                        WHERE
                            id = 10);

            /*Tablas relacionadas con JOIN*/
                /*Consultar dos tablas unidas por su clave foranea incluyendo solo matches conectadas (foreign key = primary key)*/
                    SELECT * FROM nombre_tabla INNER JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;

                /*Todas las filas conectadas y todas las filas sueltas de la tabla de la izquierda (primera). Valores null en las celdas de la otra tabla*/
                    SELECT * FROM nombre_tabla LEFT JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;

                /*Todas las conectadas + las sueltas de la tabla de la derecha*/
                    SELECT * FROM nombre_tabla RIGHT JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;

                /*Todas las conectadas y no conectadas. No en mysql*/
                    SELECT * FROM nombre_tabla FULL JOIN otra_tabla ON otra_tabla.id = nombre_tabla.estado;

                /*Self Join para hacer referencia a una tabla con jerarquía*/
                    /*ex1 y ex2 son los alias diferentes que se aplicarán a la misma tabla para referenciar la relación*/
                        SELECT ex1.nombre_columna, ex2.nombre_columna 
                            FROM nombre_tabla ex1 
                                JOIN nombre_tabla ex2 ON ex1.primary_key = ex2.foreign_key;
                    /*Ejemplo práctico*/
                        SELECT clase1.clase_coche, clase2.clase_coche   
                            FROM tipo_coches clase1
                                JOIN tipo_coches clase2 ON clase1.clase_coche_id = clase2.id;
                    
            /*Ejemplo*/
            SELECT name, last_name, brand, price FROM clients left join bikes on bikes.id = clients.bike_id where name="Jane";

        /*Insertar registros en la tabla*/
            INSERT
            /*Introduce los valores en la tabla nombrada. Opción 1*/
                INSERT INTO nombre_tabla SET id=NULL, nombre='Alfredo';

            /*Introduce los valores en la tabla nombrada. Opción 2*/
                INSERT INTO nombre_tabla (column1, column2, column3, ...) VALUES (value1, value2, value3, ...); 

            /*Introduce los valores en la tabla nombrada. Opción 3*/
                INSERT INTO nombre_tabla VALUES("value1", "value2", ...);

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

/*DCL (Data Control Language)*/
    /*DCL se aplica a la gestión de permisos*/

        /*Otorgar permisos*/
            /*indicar el comando autorizado (este caso CREATE)*/
            GRANT CREATE ON *.* TO "username"@"localhost";

        /*Otorgar permisos*/
            REVOKE ALL ON *.* FROM "username"@"localhost";

        /*Actualizar los cambios en los permisos sin salir del servidor*/
            FLUSH PRIVILEGES;

        /*Niveles de permisos*/
            /*Globales*/
                *.*
            /*Base de datos*/
                nombre_base_datos.*
            /*Tablas*/
                nombre_base_datos.nombre_tabla

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





