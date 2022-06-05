// Variables
var canvas = document.getElementById("drawCanvas");
var brush = document.getElementById("brushIMG");
var erase = document.getElementById("eraseIMG");
var ctx = canvas.getContext("2d");
var pos = { x: 0, y: 0 };
var brushOpen = "https://img.icons8.com/ios/344/paint.png";
var brushClosed = "https://img.icons8.com/ios-filled/344/paint.png";
var eraseOpen = "https://img.icons8.com/ios/344/erase.png";
var eraseClosed = "https://img.icons8.com/ios-filled/344/erase.png";
var oldScrollValue = 0;
var newScrollValue = 0;



// Event Listeners
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mousedown", draw);
document.addEventListener("mouseenter", setPosition);
document.addEventListener("mousemove", eraseColor);
document.addEventListener("mousedown", eraseColor);
brush.addEventListener("click", function() {changeHighlight("brush")});
erase.addEventListener("click", function() {changeHighlight("erase")});
window.addEventListener("load", resize);


// Functions
function changeHighlight(tool) {
    //console.log(tool)
    if (tool == "brush") {
        brush.src = brushClosed;
        erase.src = eraseOpen;
    } else if (tool == "erase") {
        brush.src = brushOpen;
        erase.src = eraseClosed;
    }
}
function draw(e) {
    if (e.buttons !== 1) {
        return
    } else {
        if (brush.src == brushOpen) {
            return
        } else {
            //var color = document.getElementById("hex").value;
            var color = "#0000ff";
            canvas.style.cursor = 'none';
            ctx.beginPath();

            ctx.lineWidth = 20;
            ctx.lineCap = "round";
            ctx.strokeStyle = color;

            ctx.moveTo(pos.x, pos.y);
            setPosition(e);
            ctx.lineTo(pos.x, pos.y);
            //console.log(pos.x, pos.y);
            ctx.stroke()
        }
    }
}
function eraseColor(e) {
    if (e.buttons !== 1) {
        return
    } else {
        if (erase.src == eraseOpen) {
            return
        } else {
            //var color = document.getElementById("hex").value;
            var color = "#ffffff";
            canvas.style.cursor = 'none';
            ctx.beginPath();

            ctx.lineWidth = 20;
            ctx.lineCap = "round";
            ctx.strokeStyle = color;

            ctx.moveTo(pos.x, pos.y);
            setPosition(e);
            ctx.lineTo(pos.x, pos.y);
            //console.log(pos.x, pos.y);
            ctx.stroke()
        }
    }
}
function changeSize() {
    console.log('test');
}
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }