// Aplicacion que permita calcular el area de un cuadrado, un rectángulo y un triángulo

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

do {
  let figura = prompt(
    "Ingrese la figura (cuadrado, rectángulo, triángulo) o 'salir' para terminar:"
  );

  // Normalize nos permite manejar las entradas con acentuaciones y sin espacios adiocionales.
  // Eliminar los acentos, permitiendo que el usuario ingrese "rectangulo" o "rectángulo"
  let figuraNormalizada = figura
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (figuraNormalizada === "salir") {
    console.log("Nos fuimos, chau!");
    break;
  }

  let area;
  switch (figuraNormalizada) {
    case "cuadrado":
      let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
      area = calcularAreaCuadrado(lado);
      //   console.log(`El área del cuadrado es: ${area}`);
      alert(`El área del cuadrado es: ${area}`);
      break;
    case "rectangulo":
      let baseRect = parseFloat(prompt("Ingrese la base del rectángulo:"));
      let alturaRect = parseFloat(prompt("Ingrese la altura del rectángulo:"));
      area = calcularAreaRectangulo(baseRect, alturaRect);
      //   console.log(`El área del rectángulo es: ${area}`);
      alert(`El área del rectángulo es: ${area}`);
      break;
    case "triangulo":
      let baseTri = parseFloat(prompt("Ingrese la base del triángulo:"));
      let alturaTri = parseFloat(prompt("Ingrese la altura del triángulo:"));

      const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;
      area = calcularAreaTriangulo(baseTri, alturaTri);
      //   console.log(`El área del triángulo es: ${area}`);
      alert(`El área del triángulo es: ${area}`);
      break;
    default:
      //   console.log("Figura no válida.");
      alert("Figura no válida. Por favor, intente de nuevo.");
      continue;
  }
} while (true);

// Otra forma de hacerlo sin utilizar switch and case es
// do {
//   let figura = prompt(
//     "Ingrese la figura (cuadrado, rectángulo, triángulo) o 'salir' para terminar:"
//   ).toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//   if (figura === "salir") {
//     console.log("Nos fuimos, chau!");
//     break;
//   }
//   let area;
//   if (figura === "cuadrado") {
//     let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
//     area = calcularAreaCuadrado(lado);
//     console.log(`El área del cuadrado es: ${area}`);
//   } else if (figura === "rectangulo") {
//     let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
//     let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
//     area = calcularAreaRectangulo(base, altura);
//     console.log(`El área del rectángulo es: ${area}`);
//   } else if (figura === "triangulo") {
//     let base = parseFloat(prompt("Ingrese la base del triángulo:"));
//     let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
//     const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;
//     area = calcularAreaTriangulo(base, altura);
//     console.log(`El área del triángulo es: ${area}`);
//   } else {
//     console.log("Figura no válida. Por favor, intente de nuevo.");
//     continue;
//   }
// } while (true);
