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

