function Solve(val) {
   document.getElementById('res').value += val;
}
function Clear() {
   document.getElementById('res').value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}
var open = true;

function toggleBracket() {
  var inputField = document.getElementById('res');
  
  if (open) {
    inputField.value += '(';
  } else {
    inputField.value += ')';
  }

  // Toggle the flag for the next click
  open = false;
}

function Result() {
   var num1 = document.getElementById('res').value;
   var num2 = eval(num1);
   document.getElementById('res').value = num2;
}
