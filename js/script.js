document.addEventListener("DOMContentLoaded", function () {

  var screen = document.getElementById('screen');

  var list = [];

  var btnResult = document.getElementById('result');
  var btnClear = document.getElementById('clear');
  var btnDelete = document.getElementById('delete')

  var btnPercent = document.getElementById('percent')

  list.push(document.getElementById('score'))

  list.push(document.getElementById('addition'))
  list.push(document.getElementById('subtract'))
  list.push(document.getElementById('multiply'))
  list.push(document.getElementById('division'))
  list.push(document.getElementById('percent'))
  list.push(document.getElementById('square'))
  list.push(document.getElementById('expon'))

  list.push(document.getElementById('num1'))
  list.push(document.getElementById('num2'))
  list.push(document.getElementById('num3'))
  list.push(document.getElementById('num4'))
  list.push(document.getElementById('num5'))
  list.push(document.getElementById('num6'))
  list.push(document.getElementById('num7'))
  list.push(document.getElementById('num8'))
  list.push(document.getElementById('num9'))
  list.push(document.getElementById('num0'))

  //add evento de click
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", valueScreen);
  }

  btnResult.onclick = function () {
    checkResult()
  }

  function checkResult() {
    try{
      var calculatedValue = screen.value;
      calculatedValue = calculatedValue.split(" ");
      calculatedValue.splice(-1,1);

      console.log(calculatedValue);
      var total = 0;
      var eq = null;
      calculatedLen = calculatedValue.length;
      calculatedValue.map(function(value, index){

        if(checkOperator === false && eq === null) {
          var calc = total + "+" + value;
          total = eval(calc);
        }else if(
          checkOperator !== false &&
          (
            checkOperator !== "exp" &&
            checkOperator !== "raiz" &&
            checkOperator !== "percent"
          )
        ){
          console.log(total + eq + value)
          total = eval(total + eq + value);
          eq = null;
        }else if(eq === null) {
          eq = value;
        }else{
          if(eq === 'exp') Math.pow(total, value);
        }

        if(calculatedLen === (index-1)) {
          if (calculatedValue || calculatedValue == "0") {
            screen.value = calculatedValue;
          }
        }

      })

    } catch (e) {
      console.error(e);
    }
  }

  function valueScreen(){
    if (checkOperator(this.value)) {
      var aux = screen.value.substring(screen.value.length - 1, screen.value.length);
      if (checkOperator(aux)) {
        deletePrevious()
      }
    }
    if (this.value) {
      screen.value += this.value + ' ';
    }
  }

  btnDelete.onclick = function () {
    deletePrevious()
  }

  function deletePrevious() {
    if (screen.value.length > 0) {
      var aux = screen.value.substring(0, screen.value.length - 1);
      screen.value = aux;
    }
  }

  btnClear.onclick = function () {
    screen.value = "";
  }

  function checkOperator(value){
    switch (value) {
      case "+":
        return "+";
      case "-":
        return "-";
      case "*":
        return "*";
      case "/":
        return "/";
      case "^":
        return "exp";
      case "√":
        return "raiz";
      case "%":
        return "percent";

      default:
        return false;

    }
  }

});
