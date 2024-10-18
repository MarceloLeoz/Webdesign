function encontraMaiorNumero(numeros) {
    return numeros.reduce((maior, numero) => {
      return numero > maior ? numero : maior;
    }, -Infinity);
  }
  
  const meuArray = [3, 7, 2, 9, 5, 10, 245];
  const maiorNumero = encontraMaiorNumero(meuArray);
  console.log(maiorNumero); 