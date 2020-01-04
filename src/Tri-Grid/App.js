import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TriGrid.css';
import TransformableTriGrid from "./TransformableTriGrid.js";


function TriGridApp() {
    return (
        <div className="TriGridApp">
            <TransformableTriGrid
                className="grid-playground"
                drawStyle={{
                    width: "512",
                    height: "512",
                    frequency: "64",
                    color: "#e1f762",
                    lineWidth: "3",
                    fadeCenterX: "512",
                    fadeCenterY: "0",
                    fadeEnd: "500",
                    fadeStart: "350"
                }} />
        </div>
    );
}

export default TriGridApp;
