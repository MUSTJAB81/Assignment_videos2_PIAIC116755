
var Time =prompt("Enter Yor time in 24hrs Format")

if(Time>=0000 && Time<1200){
    alert("GOOD MORNING")
}
else if(Time>=1200 && Time<1700){
    alert("GOOD AFTERNOON")
}
else if(Time>=1700 && Time<2100){
    alert("GOOD EVENING")
}
else if(Time>=2100 && Time<=2359){
    alert("GOOD NIGHT")
}
else{
    alert("!Wrong Entry")
}


