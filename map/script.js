let list = [
 'Bonieky Lacerda',
 'Pedro Fulano',
 'João da Silva',
 'Gabriela Duarte'
];
let firstNames = list.map((item)=>{
    let names =  item.split('')
    return names[0];
});

console.log(list);
console.log(firstNames);