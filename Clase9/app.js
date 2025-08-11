let texto = document.getElementById("inputText");

console.log("inputText");

texto.addEventListener("input", function (event) {
  console.log("El valor del campo cambio a = " + event.target.value);
});
// El evento 'input' se dispara cada vez, en vivo, que el valor del campo cambia, ya sea por escritura, pegado, etc.
// El evento 'change' se dispara cuando el campo pierde el foco y su valor ha cambiado.
texto.addEventListener("change", function (event) {
  console.log("El valor del campo cambio a = " + event.target.value);
});
