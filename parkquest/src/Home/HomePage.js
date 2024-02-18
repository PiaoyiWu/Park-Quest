import React from 'react';
import './HomePage.css';

function HomePage() {
    return(
        <React.Fragment>
            <div>
            <h1 className='quest-header'>Weekly Quest 1/3</h1>
            </div>
           <div>
           <p1 className="quest-complete">Sage Hill Natural Area</p1>
            <a className="quest-empty" href="./GenerateMap">Generate quest to fill this slot!</a>
            <a className="quest-empty" href="./GenerateMap">Generate quest to fill this slot!</a>
           </div>
        </React.Fragment>
    );
}

export default HomePage;