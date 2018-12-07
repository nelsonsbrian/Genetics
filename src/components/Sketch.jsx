import React from 'react';
import { DNA } from '../models/dna';

export default function sketch(p) {
  let rotation = 0;
  let newDNA = new DNA();

  p.setup = function () {
    p.createCanvas(800, 400);
  };

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation){
  //     rotation = props.rotation * Math.PI / 180;
  //   }
  // };



  p.draw = function () {
    p.background(250);
    // p.translate(-400, -200);
    p.fill(255, 204, 0);
    p.ellipse(0,0,50);
    p.rect(newDNA.x, newDNA.y, newDNA.w, newDNA.h);
    if (newDNA.mode === 0) {
      if (newDNA.x >= p.width - newDNA.w) {
        newDNA.mode = 1
      } else {
        newDNA.x += 4;
      }
    }
    if (newDNA.mode === 1) {
      if (newDNA.x <= 0) {
        newDNA.mode = 0;
      } else {
        newDNA.x -= 4;
      }
    }
  };
}