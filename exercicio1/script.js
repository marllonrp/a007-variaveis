let nome

let idade

console.log(typeof nome)
console.log (typeof idade)

/* retornou  undefined porque não foi atribuido nem um valor para as variáveis. */

nome = prompt("Qual seu nome?")
idade = prompt ("Qual sua idade?")

console.log(typeof nome)
console.log (typeof idade)

/* retornou as informações informadas pelo usuário, porém, ambas são so tipo "String" */

console.log("Olá,", nome, "você tem", idade, "anos")

