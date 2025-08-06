// Teniendo en cuenta la anterior estructura realizada en la entrega 1, adaptarla a un entorno web

let calcularAreaTriangulo = {
  base: 0,
  altura: 0,
  area: function () {
    return (this.base * this.altura) / 2;
  },
};

let calcularAreaCuadrado = {
  lado: 0,
  area: function () {
    return this.lado * this.lado;
  },
};

let calcularAreaRectangulo = {
  base: 0,
  altura: 0,
  area: function () {
    return this.base * this.altura;
  },
};

// let formulario = document.getElementById("formulario");
// let resultado = document.getElementById("resultado");
// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let base = parseFloat(document.getElementById("base").value);
//   let altura = parseFloat(document.getElementById("altura").value);
//   if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
//     resultado.textContent =
//       "Por favor, ingrese valores numéricos positivos para base y altura.";
//     return;
//   }
//   calcularAreaTriangulo.base = base;
//   calcularAreaTriangulo.altura = altura;
//   let area = calcularAreaTriangulo.area();
//   resultado.textContent = `El área del triángulo es: ${area}`;
// });

let select = document.createElement("select");
select.id = "operacion";
select.innerHTML = `
  <option value="">Seleccione una operación</option>
  <option value="triangulo">Triángulo</option>
  <option value="cuadrado">Cuadrado</option>
  <option value="rectangulo">Rectángulo</option>
`;
formulario.insertAdjacentElement("afterbegin", select);
let operacion = document.getElementById("operacion");
operacion.addEventListener("change", function () {
  switch (operacion.value) {
    case "triangulo":
      calcularAreaTriangulo.base = parseFloat(
        document.getElementById("base").value
      );
      calcularAreaTriangulo.altura = parseFloat(
        document.getElementById("altura").value
      );
      area = calcularAreaTriangulo.area();
      break;
    case "cuadrado":
      calcularAreaCuadrado.lado = parseFloat(
        document.getElementById("base").value
      );
      area = calcularAreaCuadrado.area();
      break;
    case "rectangulo":
      calcularAreaRectangulo.base = parseFloat(
        document.getElementById("base").value
      );
      calcularAreaRectangulo.altura = parseFloat(
        document.getElementById("altura").value
      );
      area = calcularAreaRectangulo.area();
      break;
    default:
      break;
  }
  if (isNaN(area) || area <= 0) {
    resultado.textContent =
      "Por favor, ingrese valores numéricos positivos para base y altura.";
    return;
  }
  resultado.textContent = `El área del ${operacion.value} es: ${area}`;
});
