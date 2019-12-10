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

    getProjectObjectsInColumn(projectList, i, j) {
        let objects = [];
        for (let x = i; x < projectList.length; x += j) {
            objects.push(projectList[x]);
        }
        return (objects.map((project) => <div>{this.renderProject(project)}</div>));
    }

    getProjects() {
        const projectList = projects.projects;
        return (
            <Row>
                <Col md="6" lg="4">
                    {this.getProjectObjectsInColumn(projectList, 1, 3)}
                </Col>
                <Col md="6" lg="4">
                    {this.getProjectObjectsInColumn(projectList, 0, 3)}
                </Col>
                <Col md="6" lg="4">
                    {this.getProjectObjectsInColumn(projectList, 2, 3)}
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div className="portfolio">
                <Container>
                    <Row>
                        <Col md='6'>
                            <h1>PORTFOLIO</h1>
                        </Col>
                    </Row>

                    {this.getProjects()}
                </Container>
            </div>
        )
    }
}

export default Portfolio;