//date change
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}
function bulbOn(){
	document.getElementById('img').src="images/bulbon.gif";
}
function bulbOff(){
	document.getElementById('img').src="images/bulboff.gif";
}
function smileE(){
	document.getElementById('emoji').src="images/smile.jpeg";
}
function sadE(){
	document.getElementById('emoji').src="images/sad.jpeg";
}
function showBorder(){
	document.getElementById('sb').style.border="2px solid green";
}
function showColor(){
	document.getElementById('sc').style.color="green";
}
function showText(){
	document.getElementById('sh').style.display="block";
}
function hideText(){
	document.getElementById('sh').style.display="none";
}
function showImg(){
	document.getElementById('ish').style.display="block";
}
function hideImg(){
	document.getElementById('ish').style.display="none";
}
//show result
var number1=5;
var number2=3;
var result=number1+number2
function showResult(){
	document.getElementById('result').innerHTML=result;
}
//classname
function cName(){
	document.getElementsByClassName('p')[0].innerHTML="world";
}
//tagName
function cName(){
	var data=document.getElementsByTagName('h1');
	alert(data.length);
}