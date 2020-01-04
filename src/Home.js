import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio.js';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TriGrid from './Tri-Grid/TriGrid';

function Home() {
    return (
        <div className="app">
            <TriGrid className="mesh-image"
                drawStyle={{
                    width: "2048",
                    height: "2048",
                    frequency: "256",
                    color: "#e1f762",
                    lineWidth: "8",
                    fadeCenterX: "2048",
                    fadeCenterY: "0",
                    fadeEnd: "2000",
                    fadeStart: "1600"
                }} />
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

export default Home;