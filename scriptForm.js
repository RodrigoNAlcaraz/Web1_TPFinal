let form = document.getElementById('myForm');
let primero = document.querySelector("form input");
primero.focus();
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

function validar() {

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let celular = document.getElementById('celular').value;

  let nombreError = document.getElementById('nombreError');
  let apellidoError = document.getElementById('apellidoError');
  let emailError = document.getElementById('emailError');
  let celularError = document.getElementById('celularError');
  let validado = true;
  let mensajes = document.getElementById('mensajes');

  // validar nombre 
  if (nombre.trim() === '') {
    nombreError.innerHTML = '*El campo NOMBRE debe estar completo*';
    validado = false;
  } else if (nombre.trim().length < 3) {
    nombreError.innerHTML = '*debe contener 3 caracteres como mínimo*';
    validado = false;
  } else {
    nombreError.textContent = '';
  }

  // validar apellido
  if (apellido.trim() === '') {
    apellidoError.innerHTML = '*El campo APELLIDO debe estar completo*';
    validado = false;
  } else if (apellido.trim().length < 3) {
    apellidoError.innerHTML = '*debe contener 3 caracteres como mínimo*';
    validado = false;
  } else {
    apellidoError.textContent = '';
  }

  // validar celular
  if (celular.length < 10 || celular.length > 13) {
    celularError.innerHTML = '*mínimo 10 y máximo 13 números*';
    validado = false;
  } else {
    celularError.textContent = '';
  }

  // validar correo
  if (email.trim() === '') {
    emailError.innerHTML = '*El campo CORREO debe estar completo*';
    validado = false;
  } else if (!reg_correo.test(email)) {
    emailError.innerHTML = '*error debe ser ejemplo: algo@algo.com*';
    validado = false;
  } else {
    emailError.textContent = '';
  }

  mensajes.innerHTML = '';//evita que se junten los mensajes uno abajo del otro

  //mostrar el mensaje abajo, si es falso que hay error sino mostrar los datos
  if (!validado) {
    let p = document.createElement("p");
    p.innerHTML = "Hay errores en el formulario";
    p.style.textAlign = "center";
    p.style.color = "red";
    mensajes.appendChild(p);
    return false;
  } else {
    let p = document.createElement("p");
    p.innerHTML = "Nombre completo: " + apellido + " " + nombre + ", Celular: " + celular + ", correo: " + email;
    mensajes.appendChild(p);
    form.reset();
    return false; 
  }
  
}

/*document.addEventListener('DOMContentLoaded', function () {
  let form = document.getElementById('myForm');

  let primero = document.querySelector("form input");
  primero.focus();
  let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;

    let nombreError = document.getElementById('nombreError');
    let apellidoError = document.getElementById('apellidoError');
    let emailError = document.getElementById('emailError');
    let celularError = document.getElementById('celularError');
    let validado = true;
    let mensajes = document.getElementById('mensajes');

    // validar nombre 
    if (nombre.trim() === '') {
      nombreError.innerHTML = '*El campo NOMBRE debe estar completo*';
      validado = false;
    } else if (nombre.trim().length < 3) {
      nombreError.innerHTML = '*debe contener 3 caracteres como mínimo*';
      validado = false;
    } else {
      nombreError.textContent = '';
    }

    // validar apellido
    if (apellido.trim() === '') {
      apellidoError.innerHTML = '*El campo APELLIDO debe estar completo*';
      validado = false;
    } else if (apellido.trim().length < 3) {
      apellidoError.innerHTML = '*debe contener 3 caracteres como mínimo*';
      validado = false;
    } else {
      apellidoError.textContent = '';
    }

    // validar celular
    if (celular.length < 10 || celular.length > 13) {
      celularError.innerHTML = '*mínimo 10 y máximo 13 números*';
      validado = false;
    } else {
      celularError.textContent = '';
    }

    // validar correo
    if (email.trim() === '') {
      emailError.innerHTML = '*El campo CORREO debe estar completo*';
      validado = false;
    } else if (!reg_correo.test(email)) {
      emailError.innerHTML = '*error debe ser ejemplo: algo@algo.com*';
      validado = false;
    } else {
      emailError.textContent = '';
    }

    mensajes.innerHTML = '';//evita que se junten los mensajes uno abajo del otro

    //mostrar el mensaje abajo, si es falso que hay error sino mostrar los datos
    if (!validado) {
      let p = document.createElement("p");
      p.innerHTML = "Hay errores en el formulario";
      p.style.textAlign="center";
      p.style.color="red";
      mensajes.appendChild(p);
    } else {
      let p = document.createElement("p");
      p.innerHTML = "Nombre completo: " + apellido + " " + nombre + ", Celular: " + celular + ", correo: " + email;
      mensajes.appendChild(p);
      form.reset();
    }
  });
});
*/