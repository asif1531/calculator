const num1 = document.getElementById("InputFirst");
const num2 = document.getElementById("InputSecond");
const calculate = document.querySelector("#calculate");
const clearScrn = document.getElementById("clear");
const result = document.querySelector(".result");
const operator = document.getElementById("operator");

calculate.addEventListener("click", function () {
  const opValue = operator.value;

  // typeof num1.value && typeof num2.value == "string"
  //   ? alert("Please Enter The Number"):continue

  switch (opValue) {
    case "+":
      result.textContent = `Result is : ${
        Number(num1.value) + Number(num2.value)
      }`;
      break;
    case "-":
      result.textContent = `Result is : ${
        Number(num1.value) - Number(num2.value)
      }`;
      break;
    case "*":
      result.textContent = `Result is : ${
        Number(num1.value) * Number(num2.value)
      }`;
      break;
    case "/":
      result.textContent = `Result is : ${
        Number(num1.value) / Number(num2.value)
      }`;
      break;
    case "%":
      result.textContent = `Result is : ${
        Number(num1.value) % Number(num2.value)
      }`;
      break;
    default:
      alert("Please Input Two Numbers and Select one opertor");
  }
});

clearScrn.addEventListener("click", function () {
  num1.value = "";
  operator.value = "";
  num2.value = "";
  result.textContent = "Result is: 0";
});
