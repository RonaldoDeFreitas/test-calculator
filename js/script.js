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
      console.log(screen.value);
      var calculatedValue = eval(screen.value)
      console.log(calculatedValue);
      if (calculatedValue || calculatedValue == "0") {
        screen.value = calculatedValue;
      } else {
        throw "erro";
      }
    } catch (e) {
      console.error(e);
    }
  }

  //
  function valueScreen(){
    if (checkOperator(this.value)) {
      console.log('operador', this.value);
      var aux = screen.value.substring(screen.value.length - 1, screen.value.length);
      if (checkOperator(aux)) {
        deletePrevious()
      }
    }
    if (this.value) {
      screen.value += this.value;
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
        return true;
      case "-":
        return true;
      case "*":
        return true;
      case "/":
        return true;
      case "x²":
        return true;
      case "√":
        return true;
      case "%":
        return true;

      default:

    }
  }

});
