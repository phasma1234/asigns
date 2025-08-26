let count=0;
const myClick= document.getElementById('myButton');
const myDisplay=document.getElementById('myCount');

myClick.addEventListener('click', function(){
    count++;
    myDisplay.textContent=count;

})


