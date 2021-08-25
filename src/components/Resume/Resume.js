import React from 'react';

const Resume = () => {
    return (
        <section class="container">
            <h2 className="title">Resume</h2>

            <div>
                <div class="mt-5">

                    <h3>
                        <a href="https://github.com/dcheever88" class="link px-2">GitHub</a>
                    
                    
                        <a href="https://www.linkedin.com/in/danny-cheever/" class="link">LinkedIn</a>
                    
                    </h3>
                    <h2 className="title">Proficiencies</h2>
                    <h3>Full-Stack Web Developer</h3>

                    <p class="mt-5">
                        HTML, CSS (Bootstrap, HandleBars, Bulma), Javascript, React.js, jQuery, <br />
                        APIs, Node.js, Express.js, IndexedDB, SQL, NoSQL, Sequelize, Mongoose, MongoDB
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Resume;