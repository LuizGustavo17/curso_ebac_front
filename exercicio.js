let alunos = [
  { nome: 'Ana', nota: 7 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carla', nota: 8 },
  { nome: 'David', nota: 4 },
  { nome: 'Eva', nota: 9 }
];

function filtrarAlunos(notaminima) {
  return alunos.filter(function(aluno) {
    return aluno.nota >= notaminima;
  });
}

let alunosAprovados = filtrarAlunos(6);
console.log(alunosAprovados);