const produto = {
    nome: "Shorts",
    preco: 29.99,
    quantidade: 63,
  
    calcularTotal() {
      return this.preco * this.quantidade;
    }
  };
  
  const total = produto.calcularTotal();
  console.log("O total é:", total);