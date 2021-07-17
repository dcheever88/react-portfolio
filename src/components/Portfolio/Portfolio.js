import React from 'react';
import Projects from '../../components/Project/Project.js';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>
}

const Portfolio = () => {
    return (
        <section className="container">
            <div className="project">
                <h2 className="title">My Portfolio</h2>
            </div>

            <Wrapper id="card-data">
                {Portfolio.map((project) => (
                    <Projects key={project.id} image={project.image} title={project.title} deployed={project.deployed} github={project.github} />
                ))}
            </Wrapper>
        </section>
    );
}

export default Portfolio;