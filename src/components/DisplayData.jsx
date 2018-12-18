import React from 'react';


function DisplayData(props) {
  return (
    <div>
      <style jsx>{`
        
      `}</style>
      {props.iterations.length > 0 ?
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Generation</th>
              <th scope="col">Population</th>
              <th scope="col">Fitness</th>
              <th scope="col">NoComplete</th>
              <th scope="col">Complete</th>
              <th scope="col">Crashed</th>
            </tr>
          </thead>
          <tbody>
            {props.iterations.map((iteration) => (
              <tr key={iteration.generation}>
                <td>{iteration.generation}</td>
                <td>{iteration.totalPop}</td>
                <td>{iteration.averageFitness}</td>
                <td>{iteration.totalNoComplete}</td>
                <td>{iteration.totalCompleted}</td>
                <td>{iteration.totalCrashed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        : null}
    </div>
  );
}

export default DisplayData;