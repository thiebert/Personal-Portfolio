import React from 'react';
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
        var content = "View Project";
        if (this.props.value.altLinkText) {
            content = this.props.value.altLinkText
        }
        if (link) {
            return (
                <a href={this.props.value.link} className="link">
                    <div className="link-text">
                        {content}
                    </div>
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
        return (
            <div className="details">
                <h4>About:</h4>
                {this.props.value.longDescription}

            </div>
        )

    }

    render() {
        const image = this.props.value.images[0];
        return (
            <div className="project" style={{ backgroundImage: "url(" + require("./assets/images/" + image) + ")" }} >
                <div className="image-fade" />
                <div className="image-cover" />
                {this.getProjectLink()}

                <div className="project-text" >

                    <h3>{this.props.value.name}</h3>

                    <div className="project-bio"> {this.props.value.shortDescription} </div>
                    {this.getDetails()}
                </div>
            </div>
        )
    }
}

export default Project;