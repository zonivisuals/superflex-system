import Sketch from '../particles-system/system';
import React, { useEffect } from 'react';

const Particles = () => {
  
  const container = document.getElementById('sketchContainer');
  
  function initialize() {
    if (container) {
      console.log(container)
      //new Sketch({ dom: container });
    }
  }
  useEffect(() => {
    if(container){
      setTimeout(()=>{
        window.addEventListener('load', initialize);
      },1000000000)
    }  
  }, []);

  return (
    <div id="sketchContainer" style={{ width: '100vw', height: '100vh' }}>

    </div>
  );
};

export default Particles;
