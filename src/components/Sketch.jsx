import { Rocket } from '../models/rocket';

export class GlobalSketchVars{
  constructor() {
    this.CANVAS_HEIGHT = 400;
    this.CANVAS_WIDTH = 800;
    this.POPULATION_SIZE = 25;
    this.LIFESPAN = 200;
    this.COUNT = 0;
    this.ROCKETS = [];
  }
}

export default function sketch(p) {
  console.log(p);
  let lifeP;
  let gVars = new GlobalSketchVars();
  p.setup = function () {
    // lifeP = p.createP();
    p.createCanvas(gVars.CANVAS_WIDTH, gVars.CANVAS_HEIGHT);
    p.population();
    console.log(gVars.ROCKETS);
  };
  
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };
  
  p.population = function() {
    for(let i = 0; i < gVars.POPULATION_SIZE; i++) {
      gVars.ROCKETS[i] = new Rocket(p, gVars.LIFESPAN);
    }
  };
    
  p.draw = function() {
    p.createDiv("test");
    p.background(170);
    p.fill(255, 204, 0);
    // lifeP.html(gVars.COUNT);
    // console.log(gVars.ROCKETS[0].pos.x, gVars.ROCKETS[0].pos.y);
    for(let i = 0; i < gVars.ROCKETS.length; i++) {
      gVars.ROCKETS[i].update(gVars.COUNT);
      gVars.ROCKETS[i].show();
    }
    gVars.COUNT++;
  };
}