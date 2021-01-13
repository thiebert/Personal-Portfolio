import React from 'react';
import Collection from './Collection.js';
import './App.css';
import Name from './Name.js';
import projects from './assets/projects.json';
import play from './assets/play.json';
import blogs from './assets/blogs.json';

function Home() {
    return (
        <div className="app">
            <Name />
            <Collection title="WORK" subtitle="A sample of finished projects" size={5} more-content="/portfolio" source={projects.projects} />

            <Collection title="PLAY" subtitle="Personal projects, hobbies, and more" size={3} source={play.projects} />

            <Collection title="BLOG" subtitle="Writing about stuff" size={1} source={blogs.projects} />
        </div >
    );
}

export default Home;