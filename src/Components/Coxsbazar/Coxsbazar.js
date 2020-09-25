import { Link } from 'react-router-dom';
import React from 'react';
import './Coxsbazar.css';

const Coxsbazar = () => {
    return (
        <div className="twin-container" >
            <div className="place-details">
                <h1>Cox's Bazar</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>

            <div className="dateSlection">
                
                <p>Form</p>
                <input class="form-control" type="date"></input>
                <br/>
                <br/>
                <p>To</p>
                <input class="form-control" type="date"></input>
                <br/>
                <br/>
                
                
               
                <Link to="/selectRoom"><button class="btn btn-warning">Start Booking</button></Link>
               
            </div>
        </div>
    );
};

export default Coxsbazar;