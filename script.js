"use Strict";
const num1 = document.getElementById("InputFirst");
const num2 = document.getElementById("InputSecond");
const calculate = document.querySelector("#calculate");
const clearScrn = document.getElementById("clear");
const result = document.querySelector(".result");
const operator = document.getElementById("operator");

calculate.addEventListener("click", function () {
  const opValue = operator.value;
  let results = 0;
  if (isNaN(num1.value) && isNaN(num2.value)) {
    alert(
      "Please Enter The Valid Numbers and Valid Operator to perform Calculation!"
    );
  } else {
    switch (opValue) {
      case "+":
        results = Number(num1.value) + Number(num2.value);
        result.textContent = `Result is : ${results}`;
        break;
      case "-":
        results = Number(num1.value) - Number(num2.value);
        result.textContent = `Result is : ${results}`;
        break;
      case "*":
        results = Number(num1.value) * Number(num2.value);
        result.textContent = `Result is : ${results}`;
        break;
      case "/":
        results = Number(num1.value) / Number(num2.value);
        result.textContent = `Result is : ${results}`;
        break;
      case "%":
        results = Number(num1.value) % Number(num2.value);
        result.textContent = `Result is : ${results}`;
        break;
      default:
        alert("Please Input Two Numbers and Valid opertor");
    }
  }
});

clearScrn.addEventListener("click", function () {
  num1.value = "";
  operator.value = "";
  num2.value = "";
  result.textContent = "Result is : 0";
});
