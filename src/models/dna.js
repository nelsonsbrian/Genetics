export class DNA {
  constructor(p, lifespan, newGenes) {
    this.p = p;
    this.lifespan = lifespan;
    this.genes = newGenes || this.generateDNA();
  }

  generateDNA() {
    let genes = [];
    for (let i = 0; i < this.lifespan; i++) {
      genes[i] = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 1));
      genes[i].setMag(0.2);
    }
    return genes;
  }


  crossOver(otherDNA) {
    let newGenes = [];
    let mid = Math.floor(Math.random() * this.genes.length);
    for (let i = 0; i < this.genes.length; i++) {
      if (i > mid) {
        newGenes[i] = this.genes[i];
      } else {
        newGenes[i] = otherDNA.genes[i];
      }
    }
    return new DNA(this.p, this.lifespan, newGenes);
  }

  mutation() {
    for (let i = 0; i < this.genes.length; i++) {
      if (Math.random() < 0.01) {
        this.genes[i] = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 1));
        this.genes[i].setMag(0.2);        
      }
    }
  }


}
