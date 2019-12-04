import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import './App.css';

function App(){
    return (
      <div>
        <P5Wrapper sketch={sketch} ></P5Wrapper>
      </div>
    );
}
export default App;
