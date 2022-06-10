import { maxParticlesNumber, minParticlesNumber } from "./constants.js";
import { Particle } from "./particle.js";

export class Firework {
    constructor(x, y) {
        this.particles = [];
        let particlesNumber = Math.floor(Math.random() * (maxParticlesNumber - minParticlesNumber)) + minParticlesNumber;
        for (let i = 0; i < particlesNumber; i++) {
            let angle = (360 / particlesNumber) * i * (Math.PI / 180);
            let particle = new Particle({ 'x': x , 'y': y }, angle);
            this.particles.push(particle);
        }
    }
    update() {
        this.particles.forEach(el => {
            el.update();
            if(el.size <= 0){
                this.particles.splice(this.particles.indexOf(el));
            }
        });
    }
}