function inverterString(string) {
    let arrayDeCaracteres = string.split('');
    let arrayInvertido = arrayDeCaracteres.reverse();
    let stringInvertida = arrayInvertido.join('');
    return stringInvertida;
  }

let String = "paralelepipedo";
let stringInvertida = inverterString(String);
console.log(stringInvertida); 