import React from 'react';
import './Leaderboard.css';

function Leaderboard() {
    return(
        <React.Fragment>
            <div>
            <h1 className="leaderboard-header">Weekly Leaderboard</h1>
            </div>
           <div>
            <p1 className="first">130 John Doe</p1>
            <br/>
            <br/>
            <p1 className="second">90 Jon Doe</p1>
            <br/>
            <br/>
            <p1 className="third">50 Joe Doe</p1>
            <br/>
            <br/>
            <p1 className="reg">10 John Smith</p1>
            <br/>

           </div>
        </React.Fragment>
    );
}

export default Leaderboard;