function clicou(params) {
    let title = document.querySelector('#titulo')
    let input = document.querySelector('.campo')
    if (input.value != "") {
        title.innerHTML = "Opa, "  + input.value;
        input.value = "";
    }else{
        alert("preencha o nome")
    }
    title.classList.add("verde")
}
function name(params) {
    
}
let button = document.querySelector("button");
button.addEventListener("click", clicou);