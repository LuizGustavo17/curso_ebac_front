function multiplicar(a: number, b: number): number {
    return a * b;
}
function saudacao(nome: string): string {
    return "Olá " + nome;
}
const resultadoMultiplicacao = multiplicar(2, 3);
const mensagemSaudacao = saudacao("João");

console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log("Mensagem de saudação:", mensagemSaudacao);
