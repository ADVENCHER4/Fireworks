import { colors, updateDeltaTime, maxParticleSize, minParticleSize, trailSize } from './constants.js';
import { TrailPart } from "./trailPart.js";

export class Particle {
    constructor(pos, angle) {
        this.pos = pos;
        this.angle = angle;
        this.size = Math.floor(Math.random() * (maxParticleSize - minParticleSize)) + minParticleSize;
        let velocity = Math.random() * (1.999 / updateDeltaTime);
        this.velocity = {
            'velX': parseFloat(velocity * Math.cos(angle)),
            'velY': parseFloat(velocity * Math.sin(angle))
        };
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.trail = [];
    }
    update() {
        this.size -= 0.03;
        if(this.trail.length < trailSize) {
            this.trail.push({'x': this.pos.x, 'y': this.pos.y});
        } else {
            this.trail.shift();
            this.trail.push({'x': this.pos.x, 'y': this.pos.y});
        }
        this.pos.x += parseFloat(this.velocity.velX * updateDeltaTime);
        this.pos.y += parseFloat((this.velocity.velY * updateDeltaTime) + Math.pow(updateDeltaTime, 2));
    }
}