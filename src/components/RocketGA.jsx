import { Rocket } from '../models/Rockets/rocket';
import { RocketIteration } from '../models/Iterations/iterations';

export let GlobbalSketchVest = {
  CANVAS_HEIGHT: 400,
  CANVAS_WIDTH: 800,
  POPULATION_SIZE: 25,
  LIFESPAN: 300,
  COUNT: 0,
  ROCKETS: [],
  GENERATION: 1,
  MAX_FIT: 0,
  AVG_FIT: 0,
  restart: function () {
    this.COUNT = 0;
    this.ROCKETS = [];
    this.GENERATION = 1;
    this.MAX_FIT = 0;
    this.AVG_FIT = 0;
  },
  rocketIterations: []
};

export default function RocketGA(p) {
  console.log(p);
  let lifeP, generationP, maxFit, avgFit;
  GlobbalSketchVest.restart();
  let gVars = Object.assign({}, GlobbalSketchVest);
  let target = p.createVector(50, 50);
  let matingPool = [];
  let totalDist = 0;

  let rect = {
    x: 350,
    y: 100,
    w: 20,
    h: 200
  };


  p.setup = function () {
    lifeP = p.createP();
    generationP = p.createP();
    maxFit = p.createP();
    avgFit = p.createP();
    p.createCanvas(gVars.CANVAS_WIDTH, gVars.CANVAS_HEIGHT);
    p.createFirstPopulation();
    p.updateStats();
  };

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation) {
  //     rotation = props.rotation * Math.PI / 180;
  //   }
  // };
  p.createFirstPopulation = function () {
    gVars.ROCKETS = [];
    for (let i = 0; i < gVars.POPULATION_SIZE; i++) {
      gVars.ROCKETS[i] = new Rocket(p, gVars.LIFESPAN);
    }
  };

  p.performSelection = function () {
    let maxFit = 0;
    matingPool = [];
    for (let i = 0; i < gVars.ROCKETS.length; i++) {
      gVars.ROCKETS[i].calcFitness(target, gVars.COUNT);
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
    gVars.MAX_FIT = maxFit;
    totalDist += maxFit;
    gVars.AVG_FIT = totalDist / gVars.GENERATION;
  };

  p.endOfLife = function () {
    let newRockets = [];
    for (let i = 0; i < gVars.POPULATION_SIZE; i++) {
      let parentADNA = p.random(matingPool).dna;
      let parentBDNA = p.random(matingPool).dna;
      let childDNA = parentADNA.crossOver(parentBDNA);
      childDNA.mutation();
      newRockets[i] = new Rocket(p, gVars.LIFESPAN, childDNA);
    }
    gVars.ROCKETS = newRockets;
  };

  p.updateStats = function () {
    maxFit.html('Last Fitness: ' + gVars.MAX_FIT);
    // p.createP().html("Last Distance: " + gVars.MAX_FIT);
    avgFit.html('Avg Fitness: ' + GlobbalSketchVest.LIFESPAN);
    generationP.html('Generation: ' + gVars.GENERATION);
  };
  
  p.calcStats = function () {
    let totalCrashed = 0;
    let totalCompleted = 0;
    let statAvgFitness = 0;
    for (let i = 0; i < gVars.ROCKETS.length; i++) {
      // console.log(gVars.ROCKETS[i].crashed);
      gVars.ROCKETS[i].crashed ? totalCrashed++ : null;
      gVars.ROCKETS[i].completed ? totalCompleted++ : null;
      statAvgFitness += gVars.ROCKETS[i].fitness;
    }
    statAvgFitness /= gVars.ROCKETS.length;
    GlobbalSketchVest.rocketIterations.push(new RocketIteration(gVars.ROCKETS.length, totalCrashed, totalCompleted, statAvgFitness));
    console.log(statAvgFitness);
  }

  p.draw = function () {

    for (let a = 0; a < 2; a++) {

      p.background(170);
      p.fill(255, 204, 0);
      p.rect(rect.x, rect.y, rect.w, rect.h);
      p.ellipse(target.x, target.y, 16, 16);
      p.fill(255, 0, 0);
      gVars.COUNT++;
      if (gVars.COUNT >= gVars.LIFESPAN) {
        p.calcStats();
        p.performSelection();
        p.updateStats();
        p.endOfLife();
        gVars.GENERATION++;
        gVars.COUNT = 0;
      }

      for (let i = 0; i < gVars.ROCKETS.length; i++) {
        gVars.ROCKETS[i].update(gVars.COUNT, target, rect);
        gVars.ROCKETS[i].show();
      }
      lifeP.html('Lifespan: ' + gVars.COUNT + ' / ' + gVars.LIFESPAN);
    }
  };
}