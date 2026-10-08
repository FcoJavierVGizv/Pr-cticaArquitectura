document.addEventListener("DOMContentLoaded", function() {
  const btnMostrar = document.getElementById("btn-mostrar");
  const resultadoDiv = document.getElementById("resultado");

  btnMostrar.addEventListener("click", function() {
    // Declaración de variables
    const texto = "Hola JavaScript";           // String
    const numero = 2024;                       // Number
    const esValido = true;                     // Boolean
    const nulo = null;                         // Null (typeof devuelve 'object')
    let indefinido;                            // Undefined
    const objetoPersona = { nombre: "Ana", edad: 25 }; // Object
    const arregloColores = ["Rojo", "Verde", "Azul"];  // Array (Object)

    console.clear();

    // Información general y variables
    console.log("--- console.log (Variables y Tipos) ---");
    console.log("Texto:", texto, "| Tipo:", typeof texto);
    console.log("Número:", numero, "| Tipo:", typeof numero);
    console.log("Booleano:", esValido, "| Tipo:", typeof esValido);

    // console.info -> Información destacada o del sistema
    console.info("--- console.info (Estructuras Complejas) ---");
    console.info("Objeto:", objetoPersona, "| Tipo:", typeof objetoPersona);
    console.info("Arreglo:", arregloColores, "| Tipo:", typeof arregloColores);

    // Depuración de valores especiales
    console.debug("--- console.debug (Valores Especiales) ---");
    console.debug("Null:", nulo, "| Tipo:", typeof nulo);
    console.debug("Undefined:", indefinido, "| Tipo:", typeof indefinido);

    // Mensajes de error
    console.error("--- console.error (Ejemplo de Error) ---");
    console.error("Este es un mensaje de prueba con console.error");

    resultadoDiv.innerText = "¡Se han enviado todos los datos a la consola! Abre las DevTools (F12) para ver la salida.";
  });
});