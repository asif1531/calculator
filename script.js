const num1 = document.getElementById("InputFirst");
const num2 = document.getElementById("InputSecond");
const calculate = document.querySelector("#calculate");
const clearScrn = document.getElementById("clear");
const result = document.querySelector(".result");
const operator = document.getElementById("operator");

calculate.addEventListener("click", function () {
  const opValue = operator.value;

  //   if (num1.value && num2.value == "") {
  //     alert("Enter a Number");
  //   }
  if (opValue == "+") {
    result.textContent = `Result is : ${
      Number(num1.value) + Number(num2.value)
    }`;
  } else if (opValue == "-") {
    result.textContent = `Result is : ${
      Number(num1.value) - Number(num2.value)
    }`;
  } else if (opValue == "*") {
    result.textContent = `Result is : ${
      Number(num1.value) * Number(num2.value)
    }`;
  } else if (opValue == "/") {
    result.textContent = `Result is : ${
      Number(num1.value) + Number(num2.value)
    }`;
  } else if (opValue == "%") {
    result.textContent = `Result is : ${
      Number(num1.value) + Number(num2.value)
    }`;
  }
});

clearScrn.addEventListener("click", function () {
  num1.value = "";
  operator.value = "";
  num2.value = "";
  Result.textContent = "Result is: 0";
});
