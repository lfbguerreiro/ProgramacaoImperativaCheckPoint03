// QUESTÃO 01

const alunos = {
  aluno: [],
  adicionarAluno(nome, qdeFaltas, notas) {
    const aluno = {
      nome,
      qdeFaltas,
      notas,
  
  pontuacaoMedia() {
    let soma = 0;
    let media = 0;
    for (let i = 0; i < this.notas.length; i++) {
      const nota = this.notas[i];
      soma += nota;
      media = soma / this.notas.length;
    }
    return media;
},

    faltas() {
        faltas = this.qdeFaltas;
        soma = 0;
        soma += faltas;
    return soma;
    
},

};
this.aluno.push(aluno);
},
};

alunos.adicionarAluno('Antônio', 5, [7, 8, 9, 8]);
alunos.adicionarAluno("Bruno", 1, [3, 8, 10, 7]);
alunos.adicionarAluno("Carlos", 10, [10, 9, 9, 8]);
alunos.adicionarAluno("Daniel", 8, [4, 5, 4, 6]);
alunos.adicionarAluno("Érick", 2, [6, 5, 7, 6]);



console.table (alunos.aluno);

for (let i = 0; i < alunos.aluno.length; i++) {
  const aluno = alunos.aluno[i];
  
  console.log('A média do aluno ',aluno.nome, "foi ", aluno.pontuacaoMedia());
};


for (let i = 0; i < alunos.aluno.length; i++) {
  const aluno = alunos.aluno[i];

  console.log("A quantidade de faltas do aluno ", aluno.nome, "é ", aluno.faltas());
};

let aluno1 = alunos.aluno[0];
let aluno2 = alunos.aluno[1];
let aluno3 = alunos.aluno[2];
let aluno4 = alunos.aluno[3];
let aluno5 = alunos.aluno[4];



const cursos = {
  curso: [],
  nomeCurso: "Programação Imperativa",
  notadeAprovacao: 6,
  faltasMaximas: 8,
  listaDeAlunos: [aluno1, aluno2, aluno3, aluno4, aluno5],

  adicionarAlunos(nome, faltas, notas) {
    const alunoN = {
      nome,
      faltas,
      notas,
    };
    this.listaDeAlunos.push(alunoN);
  },

  resultado(aluno) {
    let soma = 0;
    let media = 0;
    for (let i = 0; i < this.notas.length; i++) {
      const nota = this.notas[i];
      soma += nota;
      media = soma / this.notas.length;
    }
    if (media >= this.notadeAprovacao && faltas < this.faltasMaximas) {
      console.log("Aluno aprovado");
    } else if (
      media >= this.notadeAprovacao * 1.1 &&
      faltas === this.faltasMaximas
    ) {
      console.log("Aluno aprovado");
    } else console.log("Aluno reprovado");
  },

  resultadoB(aluno) {
    aluno:[];
    let soma = 0;
    let media = 0;
    for (let i = 0; i < this.notas.length; i++) {
      const nota = this.notas[i];
      soma += nota;
      media = soma / this.notas.length;
    }
    if (media >= this.notadeAprovacao && faltas < this.faltasMaximas) {
      return true;
    } else if (media >= this.notadeAprovacao * 1.1 && faltas === this.faltasMaximas) {
      return true;
    } else 
      return false;
  },
};

cursos.adicionarAlunos("Luiz", 5, [7, 8, 9, 8]);
console.log(cursos.listaDeAlunos);






