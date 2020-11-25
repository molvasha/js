function mathOperation(a, b, operation) {
  switch (operation) {
    case "+":
      alert(add(a, b));
      break;
    case "-":
      alert(minus(a, b));
      break;
    case "*":
      alert(multiply(a,b));
      break;
    case "/":
      alert(section(a, b));
      break;
  }
}

var op = prompt('Введите операцию')

mathOperation(a, b, op)