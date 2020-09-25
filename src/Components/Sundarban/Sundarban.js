import { Link } from 'react-router-dom';
import React from 'react';
import './Sundarban.css';

const Sundarban = () => {
    return (
        <div className="twin-container" >
            <div className="place-details">
                <h1>Sundarban</h1>
                <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework</p>
            </div>

            <div className="dateSlection">
                
                <p>Form</p>
                <input class="form-control" type="date"></input>
                <br/>
                <br/>
                <p>To</p>
                <input  class="form-control" type="date"></input>
                <br/>
                <br/>
                <Link to="/selectRoom"><button class="btn btn-warning">Start Booking</button></Link>
            </div>
        </div>
    );
};

export default Sundarban;