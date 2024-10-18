const aluno = {
    nome: "Marcelo",
    idade: 19,
    curso: "Engenharia de Computação",
    matricula: 248762,
  
    mostrarInformacoes() {
      console.log("Nome:", this.nome);
      console.log("Idade:", this.idade);
      console.log("Curso:", this.curso);
      console.log("Matrícula:", this.matricula);
    }
  };
  
  aluno.mostrarInformacoes();