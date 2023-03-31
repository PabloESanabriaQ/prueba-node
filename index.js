// Ejercicio FizzBuzz

// Objetivo
// Desarrollar una función que imprima un listados de números de 1 hasta N y tener en cuenta los siguientes criterios de aceptación.

// Criterios de aceptación
//DADO que el número que estoy recorriendo es multiplo de 3 ENTONCES imprimo Fizz
//DADO que el número que estoy recorriendo es multiplo de 5 ENTONCES imprimo Buzz
//DADO que el número que estoy recorriendo es multiplo de 3 y de 5 ENTONCES imprimo FizzBuzz
//DADO que el número que estoy recorriendo NO es multiplo de 3 ni de 5 ENTONCES imprimo el número

//Indicaciones:
//Instalar Express Js: (https://www.npmjs.com/package/express)
//Exponer un endpoint que al ser consultado por el navegador imprima el resultado del ejecercio FizzBuzz
//Ejemplo: al visitar la url http://localhost:3000/fizzbuzz se visualice en el navegador el resultado
//Realizar un fork del repositorio base y subir la solución a un repositorio de github propio
//Enviar el enlace del repositorio con la solución

const router = require("./src/routes");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/fizzbuzz", router);

app.get("/", (req, res) => {
  res.send("Use /fizzbuzz to look at my resolution!");
});
