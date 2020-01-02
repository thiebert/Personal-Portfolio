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
                            <p className="personal-bio"> Experienced software engineer with a passion for developing compelling, unique, and creative user experiences.</p>
                            <p className="contact"> hello [at] buildatrev.in | <a href={require("./assets/files/TrevinHiebertResume.pdf")}>Resume</a> </p>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Portfolio />
        </div >
    );
}

export default App;
