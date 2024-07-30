function mudarFundo(params) {
    let title =document.querySelector("#titulo")

    title.classList.remove("azul")
    title.classList.add("verde")

    if (title.classList.contains("azul") === true) {
        
    }
    titulo.style.color = 'pink';
    titulo.style.display = 'none';
}























let campo = document.querySelector(".campo") 
let titulo = document.querySelector("#titulo")
console.log(campo,);
console.log(titulo.innerHTML);


function readTitle(params) {
    let title = document.querySelector("#titlulo")
    return titulo.innerHTML;
}

function setTitle(newtitle) {
    let title = document.querySelector("#titulo")
    title.innerHTML = newtitle
}

function getInputValue(params) {
    let input = document.querySelector(".campo")
    return input.ariaValueMax;
}

function setTitle(params) {
    let valor = getInputValue();
    let title = document.querySelector("#titulo")
    title.innerHTML = valor;
}