import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectionClick = this.handleSelectionClick.bind(this);
        this.handleDeselectClick = this.handleDeselectClick.bind(this);
        this.state = { isSelected: false };
    }

    handleDeselectClick() {
        this.setState({ isSelected: false });
    }

    handleSelectionClick() {
        this.setState({ isSelected: true });
    }

    getResponsibilities() {
        const responsibilitiesList = this.props.value.responsibilities;
        const responsibilitiesItems = responsibilitiesList.map((item) => <li>{item}</li>);
        return (
            responsibilitiesItems
        )
    }

    getTechnologies() {
        const technologyList = this.props.value.technologies;
        const technologyItems = technologyList.map((item) => <li>{item}</li>);
        return (
            technologyItems
        )
    }

    getProjectLink() {
        const link = this.props.value.link;
        if (link) {
            return (
                <a href={this.props.value.link}>
                    <img className="link-image" src={require("./assets/images/link.png")} alt="Link" />
                </a>
            )
        }
    }

    getProjectImage() {
        const image = this.props.value.images[0];
        if (image) {
            return (
                <div className="project-image-parent">
                    <img className="project-image" src={require("./assets/images/" + image)} alt="" />
                    <div className="image-fade">
                    </div>
                </div>
            )
        }
    }

    getDetails() {
        if (this.state.isSelected) {
            return (
                <div className="details">
                    <h4>Responsibilities:</h4>
                    <ul>
                        {this.getResponsibilities()}
                    </ul>
                    <h4>Technologies Used:</h4>
                    <ul>
                        {this.getTechnologies()}
                    </ul>
                    <Button variant="project" onClick={this.handleDeselectClick}>Hide details</Button>

                </div>
            )
        }
        else {
            return (
                <div className="details">
                    <Button variant="project" onClick={this.handleSelectionClick}>More details</Button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="project">
                {this.getProjectImage()}
                <div className="project-text">
                    <h3>{this.props.value.name} {this.getProjectLink()}</h3>

                    <div className="project-bio"> {this.props.value.shortDescription} </div>
                    {this.getDetails()}
                </div>
            </div>
        )
    }
}

export default Project;