document.addEventListener('DOMContentLoaded', function () {
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

    // validar nombre 
    if (nombre.trim() === '') {
      nombreError.innerHTML = '*El campo NOMBRE debe estar completo*';
    } else if (nombre.trim().length < 3) {
      nombreError.innerHTML = '*debe contener 3 caracteres como minimo*';
    } else {
      nombreError.textContent = '';
    }

    // validar apellido
    if (apellido.trim() === '') {
      apellidoError.innerHTML = '*El campo APELLIDO debe estar completo*';
    } else if (apellido.trim().length < 3) {
      apellidoError.innerHTML = '*debe contener 3 caracteres como minimo*';
    } else {
      apellidoError.textContent = '';
    }

    // validar celular

    if (celular.length < 10 || celular.length > 13) {
      celularError.innerHTML = '*minimo 10 y máximo 13 números*';
    } else {
      celularError.textContent = '';
    }

    // validar correo
    if (email.trim() === '') {
      emailError.innerHTML = '*El campo CORREO debe estar completo*';
    } else if (!reg_correo.test(email)) {
      emailError.innerHTML = '*error debe ser ejemplo: algo@algo.com*';
    } else {
      emailError.textContent = '';
    }



  });
});

