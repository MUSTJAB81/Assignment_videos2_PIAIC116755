
var firstNumber = prompt("Enter First Number")
var operation = prompt("Enter Operation")
var secondNumber = prompt("Enter Second Number")

if (operation === "+" ){
  var a= Number(firstNumber) + Number(secondNumber)
    alert("Ans = "+a)
}
else if(operation === "-"){
    var a= Number(firstNumber) - Number(secondNumber)
      alert("Ans = "+a)
  }
  else if(operation === "-"){
    var a= Number(secondNumber) - Number(firstNumber)
      alert("Ans = "+a)
  }
else if(operation === "*"){
    var a= Number(firstNumber) *  Number(secondNumber)
      alert("Ans = "+a)
  }
else if(operation === "/"){
    var a= Number(firstNumber) / Number(secondNumber)
      alert("Ans = "+a)
  }
else if(operation === "%"){
    var a= Number(firstNumber) %  Number(secondNumber)
      alert("Ans = "+a)
  }
  
