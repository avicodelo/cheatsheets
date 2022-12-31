### SHOW

    - Mostrar las bases de datos
        show dbs

    - Mostrar las colecciones
        show collections

### USE

    - Seleccionar una base de datos. Si no existe, la crea
        use nombre_database

# DB.
## Hace referencia a la base de datos de referencia (en la que nos encontramos)
    - Eliminar la base de datos de que en la que nos encontramos*/
        db.dropDatabase()
    - Crear una colección en la base de datos
        db.createCollection("nombre_colección")

# DB.COLLECTION
## Hace referencia a la colección nombrada

### RENAMECOLLECTION
    - Renombrar una colección
        db.old_name.renameCollection("new_name")
   
### INSERT

        - Introducir nuevo registro (siempre formato json). Si la colección no existe, la crea
            db.collection_name.insert({name: "Curro", age: 20, city: "Granada"})
        
        -Introducir múltiples registros
            db.collection_name.insertMany([{regisro 1}, {registro 2}, etc ])

### FIND        
    - Mostrar todos los registros
        db.collection_name.find()

    - Mostrar los resultados en forma de json
        db.collection_name.find().pretty()

    - Se pueden filtrar los resgistros introduciendo un objeto en el argumento
        db.collection_name.find({name: "Curro"})

    - Mostrar sólo la primera coincidencia
        db.collection_name.findOne({age:20})

    - Limitar el número de campos mostrados (en el ejemplo sólo mostrará el nombre).
      El _id lo mostrará por defecto si no establecemos false
        db.collection_name.find({name: "Curro"}, {name: true , _id: false})

    - Si tenenemos un array y queremos saber si contien algo, tratarlo como una propiedad normal (contacts es un array).
        db.users.find({contacts: allMembers[1]._id})

### SORT
    - Unido al find(), ordena por la propiedad indicada y le otorgamos el orden con la prioridad (este caso 1)
        db.collection_name.find().sort({name: 1})

### COUNTDOCUMENTS
    - Contar el número de registros que coinciden
        db.collection_name.countDocuments({age: 20})

### LIMIT
    - Limita la cantidad de registros que devuelve
        db.collection_name.find().sort({age: 1}).limit(2)

### SKIP
    - Establece un punto de partida para mostrar info (en el ejemplo empezaría a partir de registro 3). Útil para paginar
        db.collection_name.find().skip(3).limit(10)

### $EXISTS
    - Detectar si una propiedad existe
        db.collection_name.find(name: {$exists: true})

### $UNSET
    - Eliminar un campo
        db.collection_name.find({name:"Curro"}, {$unset: {city:""}})

### $SIZE
    - Comparar tamaño de un array
        db.collection_name.find({members: {$size: 2}})

### $ELEMMATCH
    - Comprobar si algún elemento coincide con lo la propiedad indicada (que esté en miembros y sea de grupo 2 o mayor)
        db.collection_name.find({members: {$elemMatch: {group:{$gte : 2}}}})
        

### $COMPARADORES
    - $gt (greater than)
    - $gte (greater than or equal)
    - $lt (less than)
    - $lte (less than or equal)
    - $ne (not equal)

### UPDATE
    - Sustituye todas las propiedades por la que le indico tras filtrarme con el primer parámetro. Sólo primer registro 
        db.collection_name.update({name: "Curro"}, {name:"santiago"})

    - Mantiene todos los parámetros intactos excepto el que le indico. Sólo primer registro
        db.collection_name.update({name:"Curro"}, {$set: {name:"Carlos"}})

    - Modifica los datos numéricos sumando lo que le indico (en este caso: +5). Sólo primer registro
        db.collection_name.update({name: "Curro"}, {$inc {age: 5}})

    - Modifica todos los registros que hacen match
        db.collection_name.update({name: "Curro"}, {age: 5}, {multi: true})

    - Todos los registros hacen match dejando el objeto vacío
        db.collection_name.update({}, {$set {age: 5}}, {multi: true})
    
### REMOVE
    db.collection_name.remove()
    
### Determinar constantes
    - constante de un único dato
        const product = db.collection_name.findOne({productName : "cacerola"})

    - constante de varios datos transformados a un array
        const products = db.collection_name.find().toArray()

### Nomenclatura punto
    - Acceder a una propiedad de un objeto que está dentro de un registro. Poner comillas
        db.collection_name.find({"address.city" : "Madrid"})

    - Acceder a un array con propiedades
        db.collection_name.update({name : "Curro"}, {$set{trolley : products[1]._id}})

    - Acceder a una posición de un array (en el ejemplo, posición 2)
        db.collection_name.find({trolley.1 : "headphones"})

### Volcar y guardar base de datos
    - Copiar base datos
        mongodump -h <host:port> -d <folder_name> --o <route_directory_where_save>
            ej: mongodump -h 127.0.0.1:27017 -d users --out ~/documents

    - Importar la base de datos entera. Formato bson
        mongorestore -h <host:port> <directory or file to restore>
            ej: mongorestore -h 127.0.0.1:27017 ~/folder/database_directory

    - Importar colecciones dentro de una base de datos. Formato json
        mongoimport --db <dbName> --collection <collection_name> --file <fileName.json>
            ej: mongoimport --db carShop --collection cars --file cars.json

