export class DNA {
  constructor(p, lifespan) {
    this.genes = [];
    console.log(lifespan);
    for (let i = 0; i < lifespan; i++) {
      this.genes[i] = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.genes[i].setMag(0.2);
    }
  }
}