
var mathNumber = prompt("Enter Math Marks");
var engNumber = prompt("Enter English Marks")
var sciNumber = prompt ("Enter Science Marks")

var sum = Number(mathNumber) + Number(engNumber) + Number(sciNumber)

var percentage = sum/300*100


if(percentage>=80){
    document.write("Total Marks: &nbsp",+ sum );
    document.write("<br>");
    document.write("<br>");
    document.write("PERCENTAGE % &nbsp:",+percentage);
    document.write("<br>");
    // document.write("<br>");
    document.write("GRADE :&nbspA-ONE")
    document.write("<br>");
    // document.write("<br>");
    document.write("REMARKS :&nbsp EXCELLENT");
    }
    else if(percentage>=70){
    document.write("Total Marks:&nbsp",+ sum );
    document.write("<br>");
    document.write("<br>");
    document.write("PERCENTAGE % :&nbsp",+percentage)
    document.write("<br>");
    // document.write("<br>");
    document.write("GRADE :&nbspA")
    document.write("<br>");
    // document.write("<br>");
    document.write("REMARKS :&nbsp GOOD");
    }
    else if(percentage>=60){
    document.write("Total Marks: &nbsp",+ sum );
    document.write("<br>");
    document.write("<br>");
    document.write("PERCENTAGE % :&nbsp",+percentage)
    document.write("<br>");
    // document.write("<br>");
    document.write("GRADE : B")
    document.write("<br>");
    // document.write("<br>");
    document.write("REMARKS :&nbspYOU NEED TO IMPROVE");
    }
else{
    document.write("Total Marks: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp",+ sum );
    document.write("<br>");
    document.write("<br>");
    document.write("PERCENTAGE %:&nbsp",+percentage)
    document.write("<br>");
    // document.write("<br>");
    document.write("FAIL");
    document.write("<br>");
    // document.write("<br>");
    document.write("REMARKS :&nbsp SORRY");
}