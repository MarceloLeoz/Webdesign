function formatarEmail(nomeCompleto) {
    const nomes = nomeCompleto.split(' ');
  
    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];
  
    const email = `${primeiroNome}.${ultimoNome}@facens.br`;
  
    return email;
  }
  
  const nome = "Marcelo Buzzá Leóz";
  const emailFormatado = formatarEmail(nome);
  console.log(emailFormatado); 