const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = 'red';
ctx.lineWidth = 16;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(700, 500);
ctx.stroke();
const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}



// window.onload = resizeCanvas;
// window.onresize = resizeCanvas;