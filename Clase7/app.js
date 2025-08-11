// Clase de objetos y constructores
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

persona1 = new Persona("Juan", 25);
persona1.saludar();

function Producto(id, nombre, importe, stock) {
  this.id = id;
  this.nombre = nombre;
  this.importe = importe;
  this.stock = stock;
}

let producto1 = new Producto(1, "notebook lenovo", 15000, 25);
let producto2 = new Producto(2, "notebook samsung", 15000, 25);
let producto3 = new Producto(256, "notebook macbook", 15000, 25);
let lista = [producto1, producto2, producto3];

function filtrarProductos() {
  let palabraClave = prompt("decime que producto buscas");
  let resultado = lista.filter((producto) =>
    producto.nombre.includes(palabraClave)
  );

  if (resultado.length > 0) {
    console.table(resultado);
  } else {
    console.log("no se encontro nada");
  }
}

filtrarProductos();
