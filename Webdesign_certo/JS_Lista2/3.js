function somarElementos(array) {
    return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
  }
  
  const numeros = [10, 20, 30, 40, 50];
  const resultado = somarElementos(numeros);
  console.log(resultado);