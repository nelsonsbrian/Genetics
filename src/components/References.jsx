import React from 'react';

function Reference() {

  return(
    <div>
      <style jsx>{`
        p {
          color: white;
          text-align: left;
          font-family: sans-serif;
          margin: 20px 0px 40px 0px;
          padding: 15px 20px 15px 20px;
          color: #97AABD;
          border: 5px #9D5A63 solid;
          background: rgba(0,0,0,.1);
        }
        h2 {
          text-decoration: underline;
          font-size: 46px;
          text-shadow: black 4px 4px 0px;
        }
        h3 {
          color: #69B5A3
        }
        p, h2, h3 {
          cursor: default;
        }
      `}</style>
      <h2>References</h2>
      <h3>Artificial Neural Network</h3>
      <p>Artificial neural networks (ANN) or connectionist systems are computing systems vaguely inspired by the biological neural networks that constitute animal brains. The neural network itself is not an algorithm, but rather a framework for many different machine learning algorithms to work together and process complex data inputs. Such systems "learn" to perform tasks by considering examples, generally without being programmed with any task-specific rules. For example, in image recognition, they might learn to identify images that contain cats by analyzing example images that have been manually labeled as "cat" or "no cat" and using the results to identify cats in other images. They do this without any prior knowledge about cats, for example, that they have fur, tails, whiskers and cat-like faces. Instead, they automatically generate identifying characteristics from the learning material that they process.</p>
      <h3>Machine Learning</h3>
      <p>Machine learning (ML) is the study of algorithms and mathematical models that computer systems use to progressively improve their performance on a specific task. Machine learning algorithms build a mathematical model of sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to perform the task. Machine learning algorithms are used in the applications of email filtering, detection of network intruders, and computer vision, where it is infeasible to develop an algorithm of specific instructions for performing the task. Machine learning is closely related to computational statistics, which focuses on making predictions using computers. The study of mathematical optimization delivers methods, theory and application domains to the field of machine learning. Data mining is a field of study within machine learning, and focuses on exploratory data analysis through unsupervised learning. In its application across business problems, machine learning is also referred to as predictive analytics.</p>
      <h3>Genetic Algorithm</h3>
      <p>In computer science and operations research, a genetic algorithm (GA) is a metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA). Genetic algorithms are commonly used to generate high-quality solutions to optimization and search problems by relying on bio-inspired operators such as mutation, crossover and selection. John Holland introduced Genetic Algorithm (GA) in 1960 based on the concept of Darwin’s theory of evolution; afterwards, his student Goldberg extended GA in 1989.</p>
    </div>
  );
}

export default Reference;