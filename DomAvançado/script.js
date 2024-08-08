function fazerAcao() {
    let area = document.querySelector('.area')  /* menos recomendado para adicionar u,m item*/
    area.innerHTML += '<p> texto adicionado</>p'
    
    let p = document.createElement('p') /* Sempre adionar um item desse jeito*/ 
    p.innerHTML = 'texto adicionado 2.0'
    area.appendChild(p)
}
/* 
let p = document.createElement("p")
p.innerHTML = 'texto Adicionado'.
area.appendChild(p)

innerHTML= ler o que estám dentro da tag
creatElement = cria um elemento novo
appendChild = função que chama o novo elemento para
inseri-lo na div

*/ 