window.onload = function(){

// ----------------------- CANVAS

// function support_canvas(){
// 	return !!document.getElementById("myCanvas").getContext;
// }
// if (support_canvas()) {
// 	document.write("Supports");
// } else {
// 	document.write("Doesn't support");
// }

var canvas = document.getElementById("myCanvas"),
	canvas2 = document.getElementById("myCanvas2"),
	canvas3 = document.getElementById("myCanvas3");
var context = canvas.getContext("2d"),
	context2 = canvas2.getContext("2d"),
	context3 = canvas3.getContext("2d");

context.beginPath();
context.moveTo(0, 150);
context.lineTo(300, 150);

context.stroke();

context2.beginPath();
context2.moveTo(150, 0);
context2.lineTo(150, 300);

context2.stroke();


context3.beginPath();
context3.arc(150, 150, 70, 0, 2 * Math.PI);

context3.stroke();

context3.fillStyle = "lightgrey";
context3.fill();


//-------------------------- SVG 

	var ellipse = document.getElementById("el"),
		button = document.getElementById("btn");

	var flag;

	button.addEventListener("click", function(){
		if (flag) {
			ellipse.style.fill = "green";
			ellipse.style.ry = "50";
			ellipse.style.rx = "100";
		}else{
			ellipse.style.fill = "orange";
			ellipse.style.ry = "40";
			ellipse.style.rx = "80";
		}
		flag = !flag;

	});
};