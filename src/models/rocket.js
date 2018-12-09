// import p5 from '../../node_modules/p5/lib/p5.min.js';
import { DNA } from './dna';

export class Rocket {
  constructor(p, lifespan, newDNA) {
    this.p = p;
    this.h = 25;
    this.w = 5;
    this.horiz = 0;
    this.vert = 0;
    this.pos = p.createVector(p.width / 2, p.height);
    this.vel = p.createVector();
    this.acc = p.createVector();
    this.speed = Math.random() * 4;
    this.dna = newDNA || new DNA(p, lifespan);
    // if (newDNA) {
    //   this.dna = newDNA;
    // } else {
    //   this.dna = new DNA(p, lifespan);
    // }
    this.fitness = 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  calcFitness(target) {
    let distance = this.p.dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = this.p.map(distance, 0, this.p.width, this.p.width, 0);
  }



  update(count) {
    this.applyForce(this.dna.genes[count]);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    this.p.push();
    this.p.noStroke();
    this.p.translate(this.pos.x, this.pos.y);
    this.p.rotate(this.vel.heading());
    this.p.rectMode(this.p.CENTER);
    this.p.rect(0, 0, this.h, this.w);
    this.p.pop();
  }
}