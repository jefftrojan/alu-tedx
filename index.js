
/* ABOUT SECTION */
const tedText = "TED began in 1984 as a conference where Technology, Entertainment and Design converged and today covers almost all topics - from science to business to global issues - in more than 100 languages. TED is a non-profit organisation developed to spreading ideas, usually in the form of short, powerful talks (18 minutes or less) and believes passionately in the power of ideas to change attitudes, lives and ultimately, the world. It is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world."
const tedxText = "In the spirit of TED’s mission, “ideas worth spreading,” the TEDx program helps communities, organizations and individuals produce TED-style events at the local level. TEDx events are planned and coordinated independently, on a community-by-community basis, under a free license from TED."
const TedxALUText = " TEDxALU is founded in the spirit of TED’s mission of Ideas Worth Spreading. The student-led organisation’s goal is to create unique experiences composed of interdisciplinary talks and engaging exchanges for all attendees. We aim to provide a compelling experience through sharing ideas that change attitudes by bringing together the African Leadership University community with the global Audience. We challenge all our attendees to share, open up and be curious. We are of the strong belief that the TEDxALURwanda experience starts with reserving the ticket and continues through attending the event and goes on beyond the event."

const about = [tedText,tedxText,TedxALUText]

const ted = document.getElementById("ted")
const tedx = document.getElementById("tedx")
const TedxALU = document.getElementById("TedxALU")

const text = document.getElementById("text")

text.innerHTML = about[0]

ted.addEventListener('click', function() {
    text.innerHTML = about[0]
    ted.classList.add("active")
    if(tedx.classList.length == 2)
        tedx.classList.remove("active")
    if(TedxALU.classList.length == 2)
        TedxALU.classList.remove("active")
})

tedx.addEventListener('click', function() {
    text.innerHTML = about[1]
    tedx.classList.add("active")
    if(ted.classList.length == 2)
        ted.classList.remove("active")
    if(TedxALU.classList.length == 2)
        TedxALU.classList.remove("active")
})

TedxALU.addEventListener('click', function() {
    text.innerHTML = about[2]
    TedxALU.classList.add("active")
    if(ted.classList.length == 2)
        ted.classList.remove("active")
    if(tedx.classList.length == 2)
        tedx.classList.remove("active")
})



const canvas = document.getElementById("waves");
const h = document.querySelector("speaker-heading");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas.width, canvas.height);

let canWidth = canvas.width;
let canHeight = canvas.height;

function drawQuestionMark(x, y, size, color) {
  c.beginPath();
  c.moveTo(x, y + size);
  c.lineTo(x, y + size * 0.8);
  c.quadraticCurveTo(x, y, x + size * 0.2, y);
  c.lineTo(x + size * 0.8, y);
  c.quadraticCurveTo(x + size, y, x + size, y + size * 0.2);
  c.lineTo(x + size, y + size);
  c.lineTo(x + size * 0.8, y + size);
  c.closePath();
  c.fillStyle = color;
  c.fill();
}

function drawSin(a, w, offset, way, color) {
  var yPos = canvas.height / 2;
  var xAxis = 30;

  var funcGen = function (a, w, offset) {
    return function (x) {
      return a * Math.sin(w * x + offset);
    };
  };

  var mySin = funcGen(a, w, offset);

  // StartDraw
  for (i = 0; i < canWidth; i += canWidth / 400) {
    drawQuestionMark(i, mySin(i / xAxis) + yPos, 20, color);
  }
}

var sp = 0;
function render() {
  c.clearRect(0, 0, canWidth, canHeight);
  sp += 0.03;
  drawSin(200, 1, 0.6 * sp, false, "#000080");
  drawSin(150, 0.6, 1.5 * sp, false, "#EB0028");
  drawSin(100, 0.4, 1 * sp, false, "#fff");
  requestAnimationFrame(render);
}

render();
