
(function check_focus() {
  if (document.hasFocus() == true) {
  } else {
    window.focus();
  }
})();

const form = document.getElementById("calc");
form.addEventListener("submit", function(e) {
  e.preventDefault();
});

let firstInput = "";
let storedInput = "";
let operator = undefined;
let result = "";

const addNum = function(val) {
  firstInput += val;
  document.getElementById("disp1").value = firstInput;
};

const divide = function() {
  if(storedInput === ""){
  storedInput = firstInput;
  firstInput = "";
  document.getElementById("disp1").value = `/ ` + firstInput;
} else {
  calcResult();
}
    operator = "/";
};

const divideCalc = function() {
  if(storedInput !== "" && firstInput !== "") {
    storedInput = parseFloat(storedInput);
    firstInput = parseFloat(firstInput);
    result = storedInput / firstInput;
    result.toFixed(20);
    result = result.toString();
    storedInput = result;
    firstInput = "";
    document.getElementById("resultScreen").innerHTML = result;
  }
};

const multiply = function() {
  if(storedInput === ""){
  storedInput = firstInput;
  firstInput = "";
  document.getElementById("disp1").value = `* ` + firstInput;
} else {
  calcResult();
}
  operator = "*";
};

const multiplyCalc = function() {
  if(storedInput !== "" && firstInput !== "") {
    storedInput = parseFloat(storedInput);
    firstInput = parseFloat(firstInput);
    result = storedInput * firstInput;
    result.toFixed(20);
    result = result.toString();
    storedInput = result;
    firstInput = "";
    document.getElementById("resultScreen").innerHTML = result;
  }
};

const subtract = function() {
  if(storedInput === ""){
  storedInput = firstInput;
  firstInput = "";
  document.getElementById("disp1").value = `- ` + firstInput;
} else {
  calcResult();
 
}
   operator = "-";
};

const subtractCalc = function() {
  if(storedInput !== "" && firstInput !== "") {
    storedInput = parseFloat(storedInput);
    firstInput = parseFloat(firstInput);
    result = storedInput - firstInput;
    result.toFixed(20);
    result = result.toString();
    storedInput = result;
    firstInput = "";
    document.getElementById("resultScreen").innerHTML = result;
  }
 
};
const add = function() {
  if(storedInput === ""){
  storedInput = firstInput;
  firstInput = "";
  document.getElementById("disp1").value = `+ ` + firstInput;
} else {
  calcResult();
}
  operator = "+";
};

const addCalc = function() {
  if(storedInput !== "" && firstInput !== "") {
    storedInput = parseFloat(storedInput);
    firstInput = parseFloat(firstInput);
    result = storedInput + firstInput;
    result.toFixed(20);
    result = result.toString();
    storedInput = result;
    firstInput = "";
    document.getElementById("resultScreen").innerHTML = result;
  }
};

const clearAll = function() {
  firstInput = "";
  storedInput = "";
  operator = undefined;
  result = "";
  document.getElementById("disp1").value = firstInput;
  document.getElementById("resultScreen").innerHTML = result;
 
};
const clearLast = function() {
  firstInput = firstInput.slice(0, firstInput.length - 1);
  document.getElementById("disp1").value = firstInput;
};
const calcResult = function() {
  if (operator == "/") {
    divideCalc();
  } else if (operator == "*") {
    multiplyCalc();
  } else if (operator == "-") {
    subtractCalc();
  } else if (operator == "+") {
    addCalc();
  }
};

window.addEventListener(
  "keydown",
  function(e) {
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      e.keyCode == 110
    ) {
      firstInput += e.key;
      document.getElementById("disp1").value = firstInput;
    } else if (e.keyCode == 46) {
      clearAll();
    } else if (e.keyCode == 8) {
      clearLast();
    } else if (e.keyCode == 111) {
      divide();
    } else if (e.keyCode == 106) {
      multiply();
    } else if (e.keyCode == 109) {
      subtract();
    } else if (e.keyCode == 107) {
      add();
    } else if (e.keyCode == 13) {
      calcResult();
    }
  },
  false
);