<?php 

use PHPUnit\Framework\TestCase;
use function PHPUnit\Framework\assertEquals;

require_once('./syntax/examples/ejercicios.php');

final class EjercicioReverseTest extends TestCase
{
  // Programar varias funciones que realizen lo siguiente
  public function testReverseString(): void
  {
    $input = "Hola qué tal";
    $expectedOutput = "lat éuq aloH";
    assertEquals($expectedOutput, reverseString($input));
  }

  public function testReverseWords(): void
  {
    $input = "Hola qué tal";
    $expectedOutput = "tal qué Hola";
    assertEquals($expectedOutput, reverseWords($input));
  }

  public function testReverseWords2(): void
  {
    $input = "Hola qué tal ¿cómo estás? yo muy bien";
    $expectedOutput = "bien muy yo estás? ¿cómo tal qué Hola";
    assertEquals($expectedOutput, reverseWords($input));
  }

  public function testReverseCharactersInWords(): void
  {
    $input = "Hola qué tal";
    $expectedOutput = "aloH éuq lat";
    assertEquals($expectedOutput, reverseCharactersInWords($input));
  }
}