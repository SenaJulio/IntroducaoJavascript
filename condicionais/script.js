let nome = "João";
let idade = 18;
if (idade >= 18) {
    console.log("você é MAIOR DE IDADE");
} else if( idade === 18){
 console.log("você acabou de viarar MAIOR de idade");
} else {
    console.log("você é MENOR de idade");
}

/* operador ternário*/ 

let nomo ="fulano"; 
let classe = "mago";
let nivel = 10;
let vida = 0;
let mana = 0;
switch (classe) {
    case "guerreiro":
    case "paladino":
        vida = 100 * nivel;
        mana = 50 * nivel;
        
        break;
  case "mago":
    vida = 50 * nivel;
    mana = 100 * nivel;
    break 
    default:
        vida = 50 * nivel;
        mana = 20 * nivel
        break;
}
console.log(nomo);
console.log(classe);
console.log(nivel);
console.log(vida);
console.log(mana);