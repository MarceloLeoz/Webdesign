function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
  }
let emailValido = "marcelinho.leoz@icloud.com";
let emailInvalido = "marcelinho.leozicloud.com";
console.log(validarEmail(emailValido));  
console.log(validarEmail(emailInvalido)); 