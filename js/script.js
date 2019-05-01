// console.log("Hello");
// console.log("Hello again");
// alert("this is an alert");
// console.log("after alert");
// remove alerts and consoles before finished product; they're just developer tools.
// console.log("this is a string");
// console.log(10);
// console.log("10");

// console.log(1+2);


// console.log("string 1" + " string 2");

// var variable1 = "this is now a string";
// console.log(variable1);
// variable1 += "something else";
// console.log(variable1);

// var questionName = prompt("Hi, what's your name?");
// console.log(questionName);
// var questionAge = prompt("May I ask your age?");
// console.log(questionAge);
// var questionBand = prompt("And what's your favourite band?");
// console.log("So, "+questionName+", you're a fan of "+questionBand+" are you?");
// alert("Watch out! There's a "+questionBand+" fanboy/girl in the house!");
// var questionInstrument = prompt("What's your favourite musical instrument?");
// console.log(questionInstrument);
// alert("Check out the "+questionInstrument+" fan");

// ADDING STUFF TO THE RELEVANT HTML PAGE rather than the console
// document.write("<h2 class='lightblue'>Your name</h2>");
// document.write("<h3 class='red'>"+questionName+"</h3>");
//
// var questionBand = prompt("And what's your favourite band?");
// document.write("<h2 class='lightblue'>Your favourite band</h2>");
// document.write("<h3 class='red'>"+questionBand+"</h3>");
//
// var questionInstrument = prompt("What's your favourite musical instrument?");
// document.write("<h2 class='lightblue'>Your favourite musical instrument</h2>");
// document.write("<h3 class='red'>"+questionInstrument+"</h3>");
//
// var questionBorn = prompt("Where were you born?");
// document.write("<h2 class='lightblue'>Where you were born</h2>");
// document.write("<h3 class='red'>"+questionBorn+"</h3>");
//
// var questionFood = prompt("What's your favourite Italian food?");
// document.write("<h2 class='lightblue'>Your favourite Italian food</h2>");
// document.write("<h3 class='red'>"+questionFood+"</h3>");

var questionName = prompt("Hi, what's your name?");
document.getElementById("pageContainer").innerHTML = "<h3>What's your name?</h3>";
document.getElementById("pageContainer").innerHTML += "<h3>"+questionName+"</h3>";
document.getElementById("heading").innerText = "Hello "+ questionName;

var questionBand = prompt("And what's your favourite band?");
document.write("<h2>Your favourite band is </h2>");
document.write("<h3>"+questionBand+"</h3>");

var questionFood = prompt("What's your favourite Italian food?");
document.write("<h2>Your favourite Italian food is </h2>");
document.write("<h3>"+questionFood+"</h3>");
