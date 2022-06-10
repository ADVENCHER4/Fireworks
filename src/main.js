import { updateDeltaTime } from "./constants.js";
import { Firework } from "./firework.js";

let fireworks = [];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const clearCanvas = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

}

window.onload = resizeCanvas;
window.onresize = resizeCanvas;
window.onmousedown = event => {
    fireworks.push(new Firework(event.clientX,event.clientY));
}

setInterval(() => {
    clearCanvas();
    fireworks.forEach(el => {
        el.update();
        el.particles.forEach(particle => {
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = particle.size;
            ctx.beginPath();
            ctx.moveTo(particle.pos.x, particle.pos.y);
            particle.trail.forEach(tr => {
                ctx.lineTo(tr.x, tr.y);
            });
            ctx.stroke();
        });
    });
}, updateDeltaTime);

setInterval(() => {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    fireworks.push(new Firework(x, y));
}, 500);