let ultid = 1;
let tickets = [];

function mostrarmenu() {
  return prompt(
    "Elige una opción:\n" +
      "1. Generar nuevo ticket\n" +
      "2. Mostrar todos los tickets\n" +
      "3. Filtrar tickets\n" +
      "4. Cerrar ticket\n" +
      "5. Salir\n"
  );
}

function generarticket() {
  const nombre = prompt("Introduce el nombre del usuario:");
  const descripcion = prompt("Introduce la descripción del ticket:");
  const ticket = {
    id: ultid++,
    nombre: nombre,
    descripcion: descripcion,
    estado: "abierto",
  };
  tickets.push(ticket);
  alert("👍Generado con exito!");
}

function mostrartickets(lista) {
  if (lista.length === 0) {
    alert("No hay tickets registrados");
    return;
  }

  let texto = "Tickets registrados:\n";
  lista.forEach((ticket) => {
    texto += `ID: ${ticket.id}, Nombre: ${ticket.nombre}, Descripción: ${ticket.descripcion}, Estado: ${ticket.estado}\n`;
  });
  alert(texto);
}

function cerrarticket() {
  const id = parseInt(prompt("Introduce el ID del ticket a cerrar:"));
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) {
    alert("Ticket no encontrado.");
  }

  if (ticket.estado === "Cerrado") {
    alert("El ticket ya está cerrado.");
    return;
  }

  const confirmar = confirm("Quieres cerrar el ticket con ID " + id + "?");
  if (confirmar) {
    ticket.estado = "Cerrado";
    alert("Ticket cerrado correctamente.");
  }
}

function filtrartickets() {
  const estado = prompt(
    "Introduce el estado a filtrar (abierto/cerrado):"
  ).toLowerCase();
  const filtrados = tickets.filter(
    (ticket) => ticket.estado.toLowerCase() === estado
  );

  if (filtrados.length === 0) {
    alert("No hay tickets con ese estado.");
    return;
  }

  mostrartickets(filtrados);
}

let salir = false;

while (!salir) {
  let opcion = mostrarmenu();
  switch (opcion) {
    case "1":
      generarticket();
      break;
    case "2":
      mostrartickets(tickets);
      break;
    case "3":
      filtrartickets();
      break;
    case "4":
      cerrarticket();
      break;
    case "5":
      salir = confirm("¿Estás seguro de que quieres salir?");
      break;
    default:
      alert("Opción no válida");
  }
}
