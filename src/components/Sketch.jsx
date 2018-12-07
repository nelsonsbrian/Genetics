import React from 'react';
import { DNA } from '../models/dna';

export default function sketch (p) {
  let rotation = 0;
  let newDNA = new DNA();
  
  p.setup = function () {
    p.createCanvas(800, 400, p.WEBGL);
  };
  
  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation){
  //     rotation = props.rotation * Math.PI / 180;
  //   }
  // };


  
  p.draw = function () {
    p.background(100);
    p.translate(0,0);
    p.rect(newDNA.x, newDNA.y, newDNA.w, newDNA.h);
    // newDNA.x++;
  };
}