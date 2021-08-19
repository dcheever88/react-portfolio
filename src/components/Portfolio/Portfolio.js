import React from 'react';
import project from '../../project.json';
import Projects from '../../components/Project/Project.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>
}

const Portfolio = () => {
    return (
        <section className="container">
            <div className="project">
                <h2 className="title">My Projects</h2>
            </div>

            <Wrapper id="card-data">
                {project.map((project) => (
                    <Projects key={project.id} image={project.image} title={project.title} deployed={project.deployed} github={project.github} description={project.description} />
                ))}
            </Wrapper>
        </section>
    );
}

export default Portfolio;