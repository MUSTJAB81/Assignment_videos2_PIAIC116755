
var psw = "1234";

var pswc = prompt("enter your passward")

if (pswc ==null){
    alert("Please enter your password")
}
else if(pswc==psw){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}