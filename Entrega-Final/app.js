let usuario = [];

function MostrarTabla(usuario) {
  // Genero headers previamente
  let headers = `
    <tr>
      <th>Nombre</th>
      <th>Base</th>
      <th>Altura</th>
      <th>Lado</th>
      <th>Figura</th>
      <th>Area</th>
    </tr>
  `;

  let filas = usuario.map((user) => {
    return `
      <tr>
        <td>${user.nombre}</td>
        <td>${user.base || "-"}</td>
        <td>${user.altura || "-"}</td>
        <td>${user.lado || "-"}</td>
        <td>${user.figura || "-"}</td>
        <td>${user.area}</td>
      </tr>
    `;
  });

  // Concateno el header con las filas/contenido de usuario
  document.querySelector("table").innerHTML = headers + filas.join("");
}

function LimpiarFormulario() {
  document.getElementById("formulario").reset();
  document.getElementById("resultado").textContent = "";
  // Limpiar select figuras
  displayFiguras("");
}

function calculoAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
function calculoAreaCuadrado(lado) {
  return lado * lado;
}
function calculoAreaRectangulo(base, altura) {
  return base * altura;
}

function calcularArea(datos) {
  let area = 0;
  if (datos.figura === "triangulo") {
    area = calculoAreaTriangulo(datos.base, datos.altura);
  } else if (datos.figura === "cuadrado") {
    area = calculoAreaCuadrado(datos.lado);
  } else if (datos.figura === "rectangulo") {
    area = calculoAreaRectangulo(datos.base, datos.altura);
  }
  return area;
}

function CargaDatos() {
  const nombre = document.getElementById("nombre").value;
  const figura = document.getElementById("figura").value;

  let base = null;
  let altura = null;
  let lado = null;

  if (figura === "triangulo") {
    base = parseFloat(document.getElementById("base").value);
    altura = parseFloat(document.getElementById("altura").value);
  }
  if (figura === "rectangulo") {
    base = parseFloat(document.getElementById("base").value);
    altura = parseFloat(document.getElementById("altura").value);
  }
  if (figura === "cuadrado") {
    lado = parseFloat(document.getElementById("lado").value);
  }
  return { nombre, base, altura, lado, figura };
}

function validarDatos(datos) {
  if (!datos.nombre) {
    Swal.fire({
      title: "Campo requerido",
      html: "Por favor, ingresa tu nombre.<br><br>Este campo es obligatorio.",
      icon: "warning",
    });
    return false;
  }
  if (datos.figura === "") {
    Swal.fire({
      title: "Selección requerida",
      html: "Por favor, selecciona una figura.<br><br>Elige entre triángulo, cuadrado o rectángulo.",
      icon: "warning",
    });
    return false;
  }
  // Validar lado
  if (datos.figura === "cuadrado") {
    if (!datos.lado || datos.lado <= 0) {
      Swal.fire({
        title: "Error",
        html: "Ingresa un valor positivo para el lado. <br><br>¿Deseas continuar?",
        icon: "error",
        confirmButtonText: "Ok...",
      });
      return false;
    }
  } else {
    // Validar base y altura
    if (!datos.base || datos.base <= 0 || !datos.altura || datos.altura <= 0) {
      Swal.fire({
        title: "Error",
        html: "Ingresa valores positivos para la base y altura. <br><br>¿Deseas continuar?",
        icon: "error",
        confirmButtonText: "Ok...",
      });
      return false;
    }
  }
  return true;
}

//Funcion para mostrar figuras
function displayFiguras(figuras) {
  console.log("Figuras seleccionadas:", figuras);
  document.getElementById("base").style.display = "none";
  document.getElementById("altura").style.display = "none";
  document.getElementById("lado").style.display = "none";
  document.getElementById("Et-base").style.display = "none";
  document.getElementById("Et-altura").style.display = "none";
  document.getElementById("Et-lado").style.display = "none";

  //Mostrar campos según la figura seleccionada.
  if (figuras === "cuadrado") {
    document.getElementById("Et-lado").style.display = "block";
    document.getElementById("Et-lado").textContent = "Lado del cuadrado: ";

    document.getElementById("lado").style.display = "block";
  } else if (figuras === "triangulo") {
    document.getElementById("Et-base").style.display = "block";
    document.getElementById("Et-base").textContent = "Base del triángulo:";

    document.getElementById("Et-altura").style.display = "block";
    document.getElementById("Et-altura").textContent = "Altura del triángulo:";

    document.getElementById("base").style.display = "block";
    document.getElementById("altura").style.display = "block";
  } else if (figuras === "rectangulo") {
    document.getElementById("Et-base").style.display = "block";
    document.getElementById("Et-base").textContent = "Base del rectangulo:";

    document.getElementById("Et-altura").style.display = "block";
    document.getElementById("Et-altura").textContent = "Altura del rectangulo:";

    document.getElementById("base").style.display = "block";
    document.getElementById("altura").style.display = "block";
  }
}

// Acceso al Dom
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const Selectfigura = document.getElementById("figura");

  //Inicializar display vacio.
  displayFiguras("");

  // Cargar usuarios guardados del local storage al cargar la pagina
  // Utilizando localstorage podemos almacenar los datos en nuestro navegador.
  // Logrando que al cargar sigan estando los datos.
  const usuariosGuardados = localStorage.getItem("usuarios");
  if (usuariosGuardados) {
    // Convierte el string de vuelta a un arreglo
    usuario = JSON.parse(usuariosGuardados);
    // Mostrar datos guardados en la tabla
    MostrarTabla(usuario);
  }

  Selectfigura.addEventListener("change", (e) => {
    displayFiguras(e.target.value);
  });

  document
    .getElementById("limpiar")
    .addEventListener("click", LimpiarFormulario);

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const datos = CargaDatos();

    const validacion = validarDatos(datos);
    if (!validacion) {
      return;
    }

    const area = calcularArea(datos);
    document.getElementById("resultado").textContent = `El área es: ${area}`;

    // Crear objeto con los datos del usuario
    const usuariodata = {
      nombre: datos.nombre,
      base: datos.base,
      altura: datos.altura,
      lado: datos.lado,
      //Convierto la primer letra del nombre de la figura a mayuscula el resto a minuscula. No es magia negra, es programacion :D
      figura:
        datos.figura.charAt(0).toUpperCase() +
        datos.figura.slice(1).toLowerCase(),
      area,
    };

    //Pushear los datos del usuario al arreglo.
    usuario.push(usuariodata);

    // Mostrar los datos en la consola en formato de tabla
    console.table(usuario);

    // Guarda el arreglo como un string
    localStorage.setItem("usuarios", JSON.stringify(usuario));

    // Mostrar la tabla en el HTML
    MostrarTabla(usuario);
  });
});
