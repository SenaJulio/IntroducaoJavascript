let btn  = document.querySelector( 'button');

btn.addEventListener('click',() => {
    console.log('clicou');
})
let btm = document.querySelector('h1')
btm.addEventListener('click',()=>{
    console.log('clicou');
})



btn.addEventListener('mousedown', () =>{
    console.log('Mouse Down');
})
btn.addEventListener('mouseup',() =>{
    console.log('Mouse Up');
})

btn.addEventListener('mouseenter',() =>{
    console.log('MOuse Enter');
})
btn.addEventListener('mouseleave', () =>{
    console.log('Mouse Leave');
})