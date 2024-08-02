let list= [1, 2, 3, 4, 5];

list.forEach((item) =>{
    console.log(item * 2);
});

var lis = [
    'bonieky lacerda',
    'Pedro Fulano',
    'João da Silva',
    'Gabriela Duarte'
];
lis.forEach((item)=>{
    let names = item.split('');
    console.log(names[0]);
})
 /* forEach = para cada
  item.split = divide o item
  forEach((item)=>{
 let names = item.split('');
 console.log(names[0])
  })
 
 */ 