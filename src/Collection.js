import React from 'react';
import Project from './Project.js';
import './App.css';
import './Collection.css'
import TriGrid from './Tri-Grid/TriGrid.js';

class Collection extends React.Component {
    renderProject(i) {
        return <Project value={i} />
    }

    getProjects() {
        const projectList = this.props.source;
        let objects = projectList.slice(0, this.props.size);

        return (
            objects.map((project) => this.renderProject(project))

        );
    }

    getMore() {
        const more = this.props["more-content"];
        if (more) {
            return (
                <a href={more}>
                    <div className="more-content">
                        <TriGrid className="content-mesh"
                            isActive={true}
                            drawStyle={{
                                width: "1024",
                                height: "1024",
                                frequency: "256",
                                color: "#e1f762",
                                lineWidth: "12",
                                fadeCenterX: "512",
                                fadeCenterY: "-512",
                                fadeEnd: "1300",
                                fadeStart: "1000"
                            }} />
                        <div className="project-text" style={{ right: "0px" }}>
                            <h3>Looking for more?</h3>
                        </div>
                    </div >
                </a>
            )
        }
    }

    render() {
        return (
            <div className="collection">
                <div className='collection-title-band'>
                    <div className='collection-title'>
                        <h1 className="collection-title-main">{this.props.title} <div className="collection-title-tag">{this.props.subtitle}</div></h1>

                    </div>
                </div>

                <div className="project-list">
                    {this.getProjects()}
                    {this.getMore()}
                </div>
            </div>
        )
    }
}

export default Collection;