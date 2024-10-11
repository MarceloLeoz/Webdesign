function ehPalindromo(palavra) {
    palavra = palavra.replace(/\s/g, '').toLowerCase();
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
  }
  console.log(ehPalindromo("batata")); 
console.log(ehPalindromo("radar")); 
console.log(ehPalindromo("carro"));
console.log(ehPalindromo("meu cachorro comeu minha lição de casa")); 