import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.title} src={props.image}/>
            </div>
            <div className="project-content">
                <p className="card-title"><strong>{props.title}</strong></p>
                <p class="project-container">
                    <a href={props.deployed} target="_blank" rel="noopener noreferrer"><img class="project-icon" src="https://img.icons8.com/cotton/64/000000/website.png" alt="Deployed Application/Website" /></a>
                    <a href={props.github} target="_blank" rel="noopener noreferrer"><img class="project-icon" src="https://img.icons8.com/material-rounded/64/000000/github.png" alt="Github Repository" /></a>
                </p>
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default Projects;