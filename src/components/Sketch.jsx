import { DNA } from '../models/dna';
import { Rocket } from '../models/rocket';

export default function sketch(p) {
  console.log(p);
  let rotation = 0;
  let newDNA = new DNA();
  let rockets = [];
  const CANVAS_HEIGHT = 400;
  const CANVAS_WIDTH = 800;
  const POPULATION_SIZE = 25;
  p.setup = function () {
    p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p.population();
    console.log(rockets);
  };

  p.population = function() {
    for(let i = 0; i < POPULATION_SIZE; i++) {
      rockets[i] = new Rocket(p);
    }
  }
    
  p.draw = function() {
    p.background(170);
    p.fill(255, 204, 0);
    // console.log(rockets[0].pos.x, rockets[0].pos.y);
    for(let i = 0; i < rockets.length; i++) {
      rockets[i].update();
      rockets[i].show();
    }
  };
}
                      // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
                      //   if (props.rotation){
                      //     rotation = props.rotation * Math.PI / 180;
                      //   }
                      // };