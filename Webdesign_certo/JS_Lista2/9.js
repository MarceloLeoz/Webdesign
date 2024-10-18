const endereco = {
    rua: "Avenida Brasil",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo"
};

for (const propriedade in endereco) {
    console.log(`${propriedade}: ${endereco[propriedade]}`);
}