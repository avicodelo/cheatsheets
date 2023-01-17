hola

<?php

// Variables primitivas
  $string = "cadena de texto";
  $integer = 27;
  $float = 22.83;
  $bool = false;

// Constantes
  define("OBJETO", "Soy una tetera");
  const OTRO_OBJETO = "Soy un cucharón";

// Arrays

  $array1 = array('dato', 5, 21.2, true);  // Sintaxis antigua

  $array2 = ['dato', 5, 21.2, true];      // Sintaxis PHP 5.4
    //obtener valor
      $array1[1]; 

  $array_asociativo = [
    'nombre' => 'Carlos',
    'apellidos' => 'Herrera Conejero',
    'telefono' => '600123456',
    'email' => 'carlos@correo.com',
    'ciudad' => 'Málaga'
  ];
    //obtener valor
      $array_asociativo["apellidos"];


//Concatenar datos
  $var1 = "Hola";
  $var2 = "programadores";
  //opción 1
      $varUnidas = $var1 . $var2;
  //opción 2
      $varUnidas2 = "$var1 $var2";

//Imprimir por pantalla
  //strings y datos sencillos
    echo $varUnidas2;
    echo PHP_EOL; //para salto de línea como si hubiese pulsado intro

  //arrays
    print_r ($array_asociativo);
?>