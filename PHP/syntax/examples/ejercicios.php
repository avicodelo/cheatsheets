<?php

//usos prácticos de métodos y operadores php
function sumArray($key): int {
    $x=0;
    foreach($key as $valor){

        $x += $valor;
        
    }
    return $x;
}

function findMax(array $valores): int {
    $max = $valores[0];
    foreach ($valores as $valor ) {
        if ($max < $valor) {
            $max = $valor;
        }
    }

    return $max; 
}

function averageAge(array $peoples): int {
    $suma = 0;

    foreach ($peoples as $people ) {
        
        $suma += $people['age'];
    };

    $total = count($peoples);
    $valor = $suma / $total;
    return $valor; 

};

function reverseString($input) {
    $chars = mb_str_split($input, 1, 'UTF-8');
    return implode('', array_reverse($chars));
}

function reverseWords(string $string) : string {
    $array = explode( " ", $string);
    $arrayReversed = array_reverse($array);
    return implode(" ", $arrayReversed);
}


function reverseCharactersInWords(string $input): string{
    $arrayWords = explode(" ", $input);
    $result = [];
    foreach($arrayWords as $arrayWord){
        //función multibyte para tratar caracteres con más de 8 bytes
        $wordSplitted = mb_str_split($arrayWord, 1, 'UTF-8');
        $wordReversed = implode("", array_reverse($wordSplitted));
        $result[]= $wordReversed;
    }
    
    return implode(" ", $result); 
}