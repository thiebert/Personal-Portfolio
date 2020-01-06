import React from 'react';
import Project from './Project.js';
import projects from './assets/projects.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './App.css';

class Portfolio extends React.Component {
    renderProject(i) {
        return <Project value={i} />
    }

    getProjectObjectsInColumn(projectList, column, numberColumns) {
        let objects = [];
        for (let x = column; x < projectList.length; x += numberColumns) {
            objects.push(projectList[x]);
        }
        return (objects.map((project) => <div>{this.renderProject(project)}</div>));
    }

    getProjects() {
        const projectList = projects.projects;
        return (
            <Row>
                <Col className="d-none d-lg-block" lg="4">
                    {this.getProjectObjectsInColumn(projectList, 1, 3)}
                </Col>
                <Col className="d-none d-lg-block" lg="4">
                    {this.getProjectObjectsInColumn(projectList, 0, 3)}
                </Col>
                <Col className="d-none d-lg-block" lg="4">
                    {this.getProjectObjectsInColumn(projectList, 2, 3)}
                </Col>
                <Col className="d-block d-lg-none" md="6">
                    {this.getProjectObjectsInColumn(projectList, 1, 2)}
                </Col>
                <Col className="d-block d-lg-none" md="6">
                    {this.getProjectObjectsInColumn(projectList, 0, 2)}
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div className="portfolio">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="portfolio-title">PORTFOLIO</h1>
                        </Col>
                    </Row>

                    {this.getProjects()}
                </Container>
            </div>
        )
    }
}

export default Portfolio;