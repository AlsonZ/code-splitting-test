import React, { Suspense } from 'react';
import img from './mountain-top-4k.jpg';
import './App.css';

function Image(props) {
  return (
    <div className="image">
      <Suspense fallback={
        <div>
          Loading...
        </div>
      }>
        {/* <img src={require('/mountain-top-720.jpg')} alt="mountain" className="image"/> */}
        <img src={props.img} alt="mountain" className="image"/>
      </Suspense>
    </div>
  );
}

export default Image;
