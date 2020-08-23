function reset(id){
  let ele=document.getElementById(id)
  ele.remove()  
}

plus1=document.getElementById('plus1');

qty1=document.getElementById('qty1');
prix1=document.getElementById('prix1');
prixTotal=document.getElementById('prixTotal');
plus1.addEventListener('click',function(){
qty1.value ++;
prix1.innerHTML=55*qty1.value;
prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
});


minus1=document.getElementById('minus1');
minus1.addEventListener('click',function(){

if(qty1.value>0){
qty1.value --;
prix1.innerHTML=55*qty1.value;
prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
}

})
plus2=document.getElementById('plus2');
qty2=document.getElementById('qty2');
minus2=document.getElementById('minus2');
prix2=document.getElementById('prix2');
plus2.addEventListener('click',function(){
qty2.value++;
prix2.innerHTML=70*qty2.value;
prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
})
minus2.addEventListener('click',function(){
    if(qty2.value>0){
    qty2.value --;
    prix2.innerHTML=70*qty2.value;
    prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
    }
})
plus3=document.getElementById('plus3');
qty3=document.getElementById('qty3');
minus3=document.getElementById('minus3');
prix3=document.getElementById('prix3');
plus3.addEventListener('click',function(){
    qty3.value++;
    prix3.innerHTML=99*qty3.value;
    prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
})
minus3.addEventListener('click',function(){
if(qty3.value>0){
qty3.value--;
prix3.innerHTML=99*qty3.value;
prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
}
})

plus4=document.getElementById('plus4');
qty4=document.getElementById('qty4');
minus4=document.getElementById('minus4');
prix4=document.getElementById('prix4');
plus4.addEventListener('click',function(){
    qty4.value++;
    prix4.innerHTML=79*qty4.value;
    prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
})
minus4.addEventListener('click',function(){
if(qty4.value>0){
    qty4.value--;
    prix4.innerHTML=79*qty4.value;
    prixTotal.innerHTML=parseInt(prix1.textContent)+parseInt(prix2.textContent)+parseInt(prix3.textContent)+parseInt(prix4.textContent);
}

})
heart1.addEventListener('click',function(id){
    let x=id.target
    x.style.color='red';

})
heart2.addEventListener('click',function(id){
    let x=id.target
x.style.color='red';
})
heart3.addEventListener('click',function(id){
let x=id.target
x.style.color='red';

})
heart4.addEventListener('click',function(id){
let x=id.target
x.style.color='red';

})