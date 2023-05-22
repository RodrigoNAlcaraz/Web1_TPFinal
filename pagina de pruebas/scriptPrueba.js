//guardo las imagenes
const imagenes = [
    '../asset/imagenes/detergentes.jpg',
    '../asset/imagenes/desinfectantes.jpg' ,
    '../asset/imagenes/jabones.jpg'];
  
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
  

  function previoImagen() {
    indiceActual--;
    if (indiceActual < 0) {
      indiceActual = imagenes.length - 1;
    }
    mostrarImagen();
  }
  
  
  previoBoton.addEventListener("click", previoImagen);
  siguienteBoton.addEventListener("click", siguienteImagen);
  

  mostrarImagen();
  