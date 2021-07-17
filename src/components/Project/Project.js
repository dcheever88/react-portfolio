import React from 'react';

function Projects(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.pic}/>
            </div>
            <div className="project-content">
                <p className="card-title">{props.name}</p>
                <p class="project-container">
                    filler
                </p>
            </div>
        </div>
    );
}

export default Projects;