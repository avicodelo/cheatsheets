/* Creamos un documento con la configuración del servidor */

    //Variables de entorno (variables globales que se guardarn en env)
    // Con "||" indicamos que si existe, mantenga su valor, y si no, que le de el valor 3000
    //Los puertos aconsejados son >=3000 para evitar conflictos
        process.env.PORT = process.env.PORT || 3000;
        process.env.SEED = process.env.SEED || "SUPER SECRET SEED"; 