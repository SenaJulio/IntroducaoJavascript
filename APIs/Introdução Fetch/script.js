 /*
 O QUE SÃO APIS?
 
 APPLICATION PROGRAMMING INTERFACCE
 INTERFACE DE PROGRAMAÇÃO DA APLICAÇÃO



 APP INSTRAGAM:
 -verificar se você está logado.
 -Acessa um URL no servidor do instragan
 -manda o cara logado para a HOME .
 - Acesso uma URL nom servidor do instragen
 */

/* https://jsonplaceholder.typicode.com/users */

function loadUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then((response)=>{
            return response.json()
    }).then((json)=>{
        console.log(json.length);
    })
}
//Metodo GET, POST

function loadUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url,{
        method:'POST',
        body: JSON.stringify({
            title: 'Teste',
            body: 'corpo de teste',
            userId: '10'
        })
    })
        .then((response)=>{
            return response.json()
    }).then((json)=>{
        console.log(json.length);
    })
}
// GET, POST, PUT e DELETE

// GET = Quando quero pegar uma informação no servidor
// Post = Quando quero inserir uma informação no servidor
// PUT = Quando quero atualizar uma informação no servidor
// DELETE = Quando quero excluir uma informação no servidor
//
function loadUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => res.json())
        .then(users => { 
          let ul = document.querySelector('ul')

          for(let user of users){
            let li = document.createElement('li');
            li.innerHTML = user.name + ' (cidade:' + user.address.city + ')';
            ul.appendChild(li);
          }
        });
  }
