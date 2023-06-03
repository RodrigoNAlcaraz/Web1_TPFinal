//guardo las imagenes
const imagenes = [
  './asset/imagenes/jabones liquidos lavarropa/querubin.jpg',
  'asset/imagenes/jabones liquidos lavarropa/jabon skip.jpg',
  './asset/imagenes/jabones liquidos lavarropa/jabón-líquido-ala-repuesto-paquete.jpg', 'asset/imagenes/jabones liquidos lavarropa/jabon ariel comun.jpg'];

let indiceActual = 0; // comienza en el indice 0

const imagenElemento = document.getElementById("imagen");
const previoBoton = document.getElementById("previo");
const siguienteBoton = document.getElementById("siguiente");


//muestro imagen teniendo en cuenta el indice
function mostrarImagen() {
  const rutaImagen = imagenes[indiceActual];
  imagenElemento.src = rutaImagen;
}

//paso la imgen, incrementa el indice, si el indice es mayor vuelve a cero
function siguienteImagen() {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  mostrarImagen();
}

//decrementa el indiceActual, si es menor a 0, guarda el valor del array-1
function previoImagen() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  mostrarImagen();
}

previoBoton.onclick = previoImagen;
siguienteBoton.onclick = siguienteImagen;


/*previoBoton.addEventListener("click", previoImagen);
siguienteBoton.addEventListener("click", siguienteImagen);*/


mostrarImagen();
