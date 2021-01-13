import React from 'react';
import './App.css';
import './Name.css';
import TriGrid from './Tri-Grid/TriGrid';

class Name extends React.Component {

    state = { loaded: false, scale: 1 };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({ loaded: true })
        setInterval(function () {
            this.setState({ scale: this.state.scale * 2 })
        }.bind(this), 100)
    }

    render() {
        var end = this.state.scale ? this.state.scale : 1;
        var start = this.state.scale ? this.state.scale : .9;
        return (
            <div className="intro">
                <TriGrid className={`mesh-image`}
                    isActive={true}
                    drawStyle={{
                        width: "2048",
                        height: "2048",
                        frequency: "256",
                        color: "#e1f762",
                        lineWidth: "8",
                        fadeCenterX: "2048",
                        fadeCenterY: "0",
                        fadeEnd: "4500",
                        fadeStart: "4000"
                    }} />
                <div className={`intro-overlay-triangle ${this.state.loaded ? '' : 'before-start-animation'}`} />
                <div className={`intro-overlay-trapezoid ${this.state.loaded ? '' : 'before-start-animation'}`} />
                <div className={`title-block ${this.state.loaded ? '' : 'before-start-animation'}`}>
                    <h1 className="name">Trevin Hiebert</h1>
                    <h2 className={`job-title  ${this.state.loaded ? '' : 'scroll-hide'}`}>Software Creator</h2>
                    <p className={`personal-bio  ${this.state.loaded ? '' : 'scroll-hide'}`}> Experienced software engineer with a passion for developing compelling, unique, and creative user experiences.</p>
                    <p className={`contact  ${this.state.loaded ? '' : 'scroll-hide'}`}> <a href="mailto:hello@trevin.xyz"> hello [at] trevin.xyz</a> | <a href={require("./assets/files/TrevinHiebertResume.pdf")}>Resume</a> </p>
                </div>
                <div className={`scroll-text ${this.state.loaded ? '' : 'scroll-hide'}`}> Scroll </div>

                <div className={`scroll-indicator ${this.state.loaded ? '' : 'scroll-hide'}`} />
            </div>
        )
    }
}

export default Name;