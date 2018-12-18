import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className='heading'>
      <style jsx>{`
        .heading {
          text-align: center;
        }
        h1 {
          font-size: 75px;
          margin: 20px 60px 20px 60px;
          padding: 5px 20px 5px 20px;
          border: 5px #9D5A63 solid;
          background: rgba(0,0,0,.3);
        }
        .link-class {
          color: white;
          background: #9D5A63;
          padding: 5px 20px 5px 20px;
          width: 150px;
        }
        .link-class:hover {
          font-weight: bold;
          color: #F39E02;
          background: rgb(100, 78, 91);
        }
        .navigation-link {
          padding: 35px 20px 35px 20px;  
          margin: 0 60px 0 60px;      
          word-spacing: 60px;
          // border: 1px solid white;
          background: rgba(0,0,0,.3);
        }
      `}</style>
      <h1>Genetic Algorithms</h1>
      <h3 className='navigation-link'><Link className='link-class' to="/">Home</Link> | <Link className='link-class' to="/data">Data</Link></h3>
    </div>
  );
}

export default Header;