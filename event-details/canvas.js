const canvas = document.getElementById("waves");
const h = document.querySelector("speaker-heading");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas.width,canvas.height);

let canWidth = canvas.width;
let canHeight = canvas.height;


/*const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 200,
    frequency: 0.01
}

let increment = wave.frequency
function animate() {
  
  c.strokeStyle = "#3399fd"
  c.lineWidth=3;
  wave.amplitude = 200;
  plotSine()

  c.strokeStyle = "#10ab4e"
  c.lineWidth = 2;
  wave.amplitude = 300;
  plotSine()

  increment += wave.frequency
  requestAnimationFrame(animate)
}

function plotSine(){
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.beginPath()
  c.moveTo(0, canvas.height / 2)

  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude)
  }

  c.stroke()
}

animate()*/

function drawSin(a,w,offset,way,color){
	var yPos = canvas.height/2;
	var xAxis = 30;

	var funcGen = function(a, w, offset){
		return function(x){
			return (a * Math.sin(w*x+offset));
		}
	}

	var mySin = funcGen(a, w,offset);

	//StartDraw

	c.beginPath();
	c.moveTo(0,0);
	for(i=0; i<canWidth; i+=canWidth/400){
		c.lineTo(i,mySin(i/xAxis)+yPos);
	}
	if(way){
		c.lineTo(canWidth,0);
		c.lineTo(0,0);
		c.closePath();
		c.fillStyle = color
		c.fill();
	}else{
		c.strokeStyle = color
		c.lineWidth = 4;
		c.stroke();
	}

}


var sp = 0;
function render (){
	c.clearRect(0, 0, canWidth, canHeight);
	sp += 0.03;
	drawSin(200,1,0.6*sp,false,'#465484');
	drawSin(150,0.6,1.5*sp,false,'#EB0028');
	drawSin(100,0.4,1*sp,false,'#DDCB93');
	requestAnimationFrame(render);
}

render();