<?php

//En la función se puede indicar el tipo de dato que es la variable.
//Después de los dos puntos se indica el tipo de output que podemos esperar
function call(string $name): string {
  return "Por favor, " . $name . ", acuda a recepción.";
}

$square = function(int $number): int {
  return $number * $number;
};

$ouput = $square(5);

function add(int $a, int $b = 1): int {
  return $a + $b;
}

function addFive(int &$a): int {
  return $a += 5;
}