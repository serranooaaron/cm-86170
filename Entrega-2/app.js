let usuario = [];

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Validar que los campos no estén vacíos y que los números sean positivos
    if (nombre && base > 0 && altura > 0) {
      const area = (base * altura) / 2;
      document.getElementById(
        "resultado"
      ).textContent = `El área del triángulo es: ${area}`; // mostrar el resultado en el párrafo
      // Guardar los datos del usuario en el Array
      usuario.push({ nombre, base, altura, area });
      // Mostrar los datos en la consola en formato de tabla
      console.table(usuario);
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  });
});
