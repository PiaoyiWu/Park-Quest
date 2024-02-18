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
            <br/>
           <div>
            <h1 className='quest-header'>Info</h1>
            <p1 className='info'>ParkQuest is an app which allows you to visit every major park in Calgary. Every week, you'll set a number of quests to be completed which will be randomly generated. Each quest you complete will earn you 10 points for the weekly leaderboard! Points are only generated if you spend more than half an hour in the location. Enjoy!</p1>
            <br/>
            <br/>

            <p1 className='info'>For more informationon/details on parks, visit: </p1>
            <a href="https://data.calgary.ca/Recreation-and-Culture/Parks-Sites/i9fu-gjqj">Open Data Calgary</a>
           </div>
        </React.Fragment>
    );
}

export default HomePage;