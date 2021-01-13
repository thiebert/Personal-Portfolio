import React from 'react';
import './App.css';
import Home from './Home.js'
import TriGridApp from './Tri-Grid/App.js'

import Collection from './Collection.js';
import projects from './assets/projects.json';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router className="App">
            <Switch>
                <Route path="/portfolio">
                    <Collection title="PORTFOLIO" subtitle="A full collection of finished projects" size={100} source={projects.projects} />
                </Route>
                <Route path="/tri-grid">
                    <TriGridApp />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
