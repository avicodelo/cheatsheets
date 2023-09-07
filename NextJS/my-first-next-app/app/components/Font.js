//Importamos la fuente deseada
import { Allura } from "next/font/google";

//Si el nombre de la fuente tiene barra baja (_) hay que cambiarle el nombre para poder meterla en const
/* import { Space_Grotesk as SpaceGrotesk } from "next/font/google" */

//Declaramos una variable para especificar opciones a la fuente
export const myFont = Allura({
    //Peso de la fuente
    weight: "400",

    //Caracteres de la fuente
    subsets: ["latin"],

    //Variable para utilizarla en css
    variable: "--alluraFont"
})
