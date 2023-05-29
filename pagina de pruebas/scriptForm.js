document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('myForm');
  
    form.addEventListener('submit', function(event) {
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
      if (nombre.trim() === '' ) {
        nombreError.innerHTML= '*El campo NOMBRE debe estar completo*';
      } else if(nombre.trim().length <3){
        nombreError.innerHTML = '*debe contener 3 caracteres como minimo*';
      } else {
        nombreError.textContent = '';
      }

      // validar apellido
      if (apellido.trim() === '' ) {
        apellidoError.innerHTML= '*El campo APELLIDO debe estar completo*';
      } else if(apellido.trim().length <3){
        apellidoError.innerHTML = '*debe contener 3 caracteres como minimo*';
      } else {
        apellidoError.textContent = '';
      }

      // validar celular
  
      if (celular.trim() === '' ) {
        celularError.innerHTML= '*El campo CELULAR debe estar completo*';
      } else if(celular.trim().length <3){
        celularError.innerHTML = '*Debe contener 3 numeros como minimo*';
      } else {
        celularError.textContent = '';
      }
  
     // validar correo
     if (email.trim() === '' ) {
        emailError.innerHTML= '*El campo CORREO debe estar completo*';
      } else if(email.trim().length <3){
        emailError.innerHTML = '*Debe contener 3 caracteres como minimo*';
      } else {
        emailError.textContent = '';
      }

  
     
    });
  });
  
  