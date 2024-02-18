import React from 'react';
import './Generate.css';

function Generate() {
    return(
        <React.Fragment>
            <div>
            <h1 className='quest-header'>Generate Map</h1>
            </div>
            <label className="inputLabel">Park Distance Limit (km): </label>
            <input type="number" />
        </React.Fragment>
    );
}

export default Generate;