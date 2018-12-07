// import p5 from '../../node_modules/p5/lib/p5.min.js';

export class Rocket {
  constructor(p) {
    this.p = p;
    this.h = 25;
    this.w = 5;

    this.horiz = 0;
    this.vert = 0;
    this.pos = p.createVector(p.width/2, p.height);
    this.vel = p.createVector(p.random(-1,1), p.random(-1,0));
    this.acc = p.createVector();
    this.speed = Math.random() * 4;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    this.p.push()
    this.p.noStroke();
    this.p.translate(this.pos.x, this.pos.y);
    this.p.rotate(this.vel.heading());
    this.p.rectMode(this.p.CENTER);
    this.p.rect(0, 0, this.h, this.w);
    this.p.pop()
  }
}