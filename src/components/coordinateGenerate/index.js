
import React from 'react';

function CoordinateGenerate (props){

    return (
      <div className="square" onClick={props.generateCoordinates}>
        {props.latLng.lat} {props.latLng.lng}
      </div>
    );  
}

export default CoordinateGenerate;
