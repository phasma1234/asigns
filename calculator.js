const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const result = document.getElementById("result");

    function add() {
      result.textContent = "Result: " + (parseFloat(num1.value) + parseFloat(num2.value));
    }
    function subtract() {
      result.textContent = "Result: " + (parseFloat(num1.value) - parseFloat(num2.value));
    }
    function multiply() {
      result.textContent = "Result: " + (parseFloat(num1.value) * parseFloat(num2.value));
    }
    function divide() {
      if (parseFloat(num2.value) === 0) {
        result.textContent = "Result: Cannot divide by zero!";
      } else {
        result.textContent = "Result: " + (parseFloat(num1.value) / parseFloat(num2.value));
      }
    }

    document.getElementById("addBtn").addEventListener("click", add);
    document.getElementById("subBtn").addEventListener("click", subtract);
    document.getElementById("mulBtn").addEventListener("click", multiply);
    document.getElementById("divBtn").addEventListener("click", divide);