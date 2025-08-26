/*let Count =0;
const Button=document.getElementById('myButton')
const Display=document.getElementById('myDisplay')

Button.addEventListener('click', function(){
    Count++;
    Display.textContent=Count;
});

const button = document.getElementById("changeColorBtn");
    const box = document.getElementById("colorBox");

    // function to generate random hex color
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    button.addEventListener("click", function () {
      box.style.backgroundColor = getRandomColor();
    });


const Greetings=document.getElementById('greetings')

const Username=document.getElementById('username');

Username.addEventListener('input', function(){

  Greetings.textContent='Your Name is ' + Username.value;
})*/

const Greetings = document.getElementById('greetings');
const Username = document.getElementById('username');

Username.addEventListener('input', function() {
  Greetings.textContent = "Your name is " + Username.value;
});
