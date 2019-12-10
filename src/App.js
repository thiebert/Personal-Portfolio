import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio.js';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
    return (
        <div className="app">

            <img className="mesh-image" src={require("./assets/images/Mesh.png")} />
            <div className="heading">

                <Container>
                    <Row className="title">
                        <Col md='8' lg='6'>
                            <h1 className="name">Trevin Hiebert</h1>
                            <h2 className="jobTitle">Software Creator</h2>
                            <p className="personal-bio">I am a software engineer with 5 years of experience in creating augmented reality, virtual reality, mobile applications, and web experiences. Reach me at hello [at] buildatrev.in.</p>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Portfolio />
        </div >
    );
}

export default App;
