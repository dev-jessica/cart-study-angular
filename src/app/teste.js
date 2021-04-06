async function Jessica () {
    var value = await Promise
      .resolve(1)
      .then(x => x * 1)
      .then(x => x + 1)
      .then(x => x / 1);
    return value;
  }
  Jessica().then(x => console.log(`x: ${x}`));
  

//nao deu certo
async  function jessica(){
console.log("print2")
console.log("print3")
console.log("print4")
}
jessica().then(setTimeout(() => console.log("print1"), 2000))

//sucesso
const teste = seconds => new Promise(resolve => setTimeout(resolve, 5000));
teste().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); 