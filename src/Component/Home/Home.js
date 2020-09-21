import React from 'react';
import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import backImage from '../../images/Rectangle_1.png';



const Home = () => {
    
    return (
        
        <div style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${backImage})` }}>
             <Header></Header> 
             <Container>
                 <Row style={{color:`white`}}>
                     <Col xs={6}>
                        <h1>COX'S BAZAR</h1>
                        <p>Cox's Bazar is a city, fishing Port, tourisum ceter and district headquaters in southeastern Bangladesh. It is famous mostly for its long naturla snady beach</p>
                        <Button variant="warning">Booking</Button>
                     </Col>

                     <Col xs={6} >
                     <CardGroup className="cardStyle">
                            <Card>
                                <Card.Img variant="top" src={backImage} />
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={backImage}  />   
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={backImage}  />
                            </Card>
                            </CardGroup>
                     </Col>
                 </Row>

                
             </Container>
       
            
      
        </div>
    );
};

export default Home;