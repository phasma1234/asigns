const Num1=document.getElementById('num1')
const Num2=document.getElementById('num2')
const Result=document.getElementById('result')

    function add(){
      Result.textContent="Result: "+ (parseFloat(Num1.value)+parseFloat(Num2.value));
    }
    function subtract() {
      Result.textContent = "Result: " + (parseFloat(Num1.value) - parseFloat(Num2.value));
    }
    function multiply() {
      Result.textContent = "Result: " + (parseFloat(Num1.value) * parseFloat(Num2.value));
    }
    function divide() {
      if (parseFloat(Num2.value) === 0) {
        Resultesult.textContent = "Result: Cannot divide by zero!";
      } else {
        Result.textContent = "Result: " + (parseFloat(Num1.value) / parseFloat(Num2.value));
      }
    }

    document.getElementById("addBtn").addEventListener("click", add);
    document.getElementById("subBtn").addEventListener("click", subtract);
    document.getElementById("mulBtn").addEventListener("click", multiply);
    document.getElementById("divBtn").addEventListener("click", divide);

