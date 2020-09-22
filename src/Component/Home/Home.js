import React from 'react';
import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import backImage from '../../images/Rectangle_1.png';
import sundoebon from '../../images/sundorbon.png';
import sajek from '../../images/Sajek.png';
import sremongol from '../../images/Sreemongol.png';


const Home = () => {
    
    return (
        
        <div style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${backImage})` }}>
             <Header></Header> 
             <Container>
                 <Row style={{color:`white`}}>
                     <Col xs={4}>
                        <h1>COX'S BAZAR</h1>
                        <p>Cox's Bazar is a city, fishing Port, tourisum ceter and district headquaters in southeastern Bangladesh. It is famous mostly for its long naturla snady beach</p>
                        <Button variant="warning">Booking</Button>
                     </Col>

                     <Col>
                        
                            <div>
                                <img style={{height:'350px', width:'220px',padding:'10px'}} src={sundoebon} alt=""/>
                                <img style={{height:'350px', width:'220px',padding:'10px'}} src={sajek} alt=""/>
                                <img style={{height:'350px', width:'220px',padding:'10px'}} src={sremongol} alt=""/>
                            </div>
                     </Col>
                 </Row>

                
             </Container>
       
            
      
        </div>
    );
};

export default Home;