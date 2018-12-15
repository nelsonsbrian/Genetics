import React from 'react';

function DisplayData(props) {
  return(
    <div>
      {props.iterations.map((iteration, index) => (
        <h6 key={index}>{index + 1}: population {iteration.totalPop} avgfit{iteration.averageFitness}, totComp{iteration.totalCompleted}, totcrash{iteration.totalCrashed}, totalNoCom{iteration.totalNoComplete}}</h6>

      ))}
    </div>
  );
}

export default DisplayData;