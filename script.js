function aprender(){
    let aprendendo = document.querySelector('aprender')
    aprendendo.innerHTML;
}

function setTitle(newTitle) {
    let title = document.querySelector("#titulo");
    title.innerHTML = newTitle;
}

function getInputValue() {
    let input = document.querySelector(".campo");
    return input.value;
}
function setTitle() {
    let valor = getInputValue();
    let titulo = document.querySelector("#titulo")
    title.innerHTML = value;
}

function mudarFundo() {
    let title = document.querySelector("titulo")
    title.classList.add('verde')
    title.classList.remove('azul')

    if (title.classList.contains('verde')=== true) {
        title.style.display = "none"
    }
}

function ocultar() {
    let title = document.querySelector("#titulo");
    title.style.display = 'none';
}