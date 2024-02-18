import React from 'react';
import './Generate.css';
import BingMapsReact from "bingmaps-react";

function Generate() {
    const pushPin = {
        center: {
            latitude: 51.11445224178181, longitude: -114.11184043641374,
        },
        options: {
          title: "Quest: Nose Hill Park",
        },
      }
      
      const pushPins = [pushPin];
    return(
        <React.Fragment>
            <div>
            <h1 className='quest-header'>Generate Map</h1>
            </div>
            <label className="inputLabel">Park Distance Limit (km): </label>
            <input type="number" placeholder='20' />
            <div className="map">
                <BingMapsReact
                    
                    pushPins = {pushPins}


                    bingMapsKey="AkIc3egCmfryDu_QvCyEGfKNaCIRdCoCclWmq30ScwIcxO8thm6PhAxm5kLxBSzi"
                    height="500px"
                    mapOptions={{
                        navigationBarMode: "square",
                    }}
                    width="500px"
                    viewOptions={{
                        center: { latitude: 51.080138592347666, longitude: -114.13040210347496 },
                        mapTypeId: "road",
                    }}
                />
            </div>
                
        </React.Fragment>
    );
}

export default Generate;