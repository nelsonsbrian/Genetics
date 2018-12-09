import { Rocket } from '../models/rocket';

export class GlobalSketchVars {
  constructor() {
    this.CANVAS_HEIGHT = 400;
    this.CANVAS_WIDTH = 800;
    this.POPULATION_SIZE = 25;
    this.LIFESPAN = 200;
    this.COUNT = 0;
    this.ROCKETS = [];
    this.GENERATION = 0;
  }
}

export default function sketch(p) {
  let lifeP, generationP;
  let gVars = new GlobalSketchVars();
  let target = p.createVector(50, 50);
  let matingPool = [];

  p.setup = function () {
    lifeP = p.createP();
    generationP = p.createP();
    p.createCanvas(gVars.CANVAS_WIDTH, gVars.CANVAS_HEIGHT);
    p.createFirstPopulation();
  };

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation) {
  //     rotation = props.rotation * Math.PI / 180;
  //   }
  // };
  p.createFirstPopulation = function() {
    gVars.ROCKETS = [];
    for (let i = 0; i < gVars.POPULATION_SIZE; i++) {
      gVars.ROCKETS[i] = new Rocket(p, gVars.LIFESPAN);
    }
  }
  
  p.performSelection = function() {
    let maxFit = 0;
    matingPool = [];
    for (let i = 0; i < gVars.ROCKETS.length; i++) {
      gVars.ROCKETS[i].calcFitness(target);
    }
    for (let i = 0; i < gVars.POPULATION_SIZE; i++) {
      if (gVars.ROCKETS[i].fitness > maxFit) {
        maxFit = gVars.ROCKETS[i].fitness;
      }
    }
    for (let i = 0; i < gVars.POPULATION_SIZE; i++) {
      gVars.ROCKETS[i].fitness /= maxFit;
    }
    for (let i = 0; i < gVars.POPULATION_SIZE; i++) {
      let n = gVars.ROCKETS[i].fitness * 100;
      for (let j = 0; j < n; j++) {
        matingPool.push(gVars.ROCKETS[i]);
      }
    }
  };
  
  p.endOfLife = function() {
    let newRockets = [];
    for (let i = 0; i < gVars.POPULATION_SIZE; i++) {
      let parentADNA = p.random(matingPool).dna;
      let parentBDNA = p.random(matingPool).dna;
      let childDNA = parentADNA.crossOver(parentBDNA);
      newRockets[i] = new Rocket(p, gVars.LIFESPAN, childDNA);
    }
    gVars.ROCKETS = newRockets;
    gVars.GENERATION++;
  };

  p.draw = function () {

    p.background(170);
    p.fill(255, 204, 0);
    p.ellipse(target.x, target.y, 16, 16);
    generationP.html("Generation: " + gVars.GENERATION);
    lifeP.html("Lifespan: " + gVars.COUNT);

    gVars.COUNT++;
    if (gVars.COUNT === gVars.LIFESPAN) {
      p.performSelection();
      p.endOfLife();
      gVars.COUNT = 0;
    }

    for (let i = 0; i < gVars.ROCKETS.length; i++) {
      gVars.ROCKETS[i].update(gVars.COUNT);
      gVars.ROCKETS[i].show();
    }
  };
}