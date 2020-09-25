import React from 'react';
import { Link } from 'react-router-dom';

import coxbazar from '../../images/Sajek.png';
import sreemongol from '../../images/Sreemongol.png';
import sundorbon from '../../images/sundorbon.png';
import './TourPlace.css';
const TourPlace = () => {
    
    return (
        <div className="tourPlace-container">
            <div className="place-details-container">
                <h1>Cox's Bazar</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.</p>
                <button class="btn btn-warning">Book Now</button>
            </div>

            <div className="place-container">
                <Link to="/coxbazar"><img className="imageCard" src={coxbazar} alt="cox's Bazar"></img></Link>
                <Link to="/serrmangal"><img className="imageCard" src={sreemongol} alt="cox's Bazar"></img></Link>
                <Link to="/sundorban"><img className="imageCard" src={sundorbon} alt="cox's Bazar"></img></Link>
                
                
            </div>
            
            

        </div>
    );
};

export default TourPlace;