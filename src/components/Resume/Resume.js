import React from 'react';

const Resume = () => {
    return (
        <section class="container">
            <h2 className="title">Resume</h2>

            <div>
                <div class="mt-5">
                    <p >Full-Stack Web Developer</p>

                    <p class="mt-5">
                        <a href="https://github.com/dcheever88" class="link">GitHub</a>
                    </p>
                    <p class="mt-5">
                        <a href="https://www.linkedin.com/in/danny-cheever/" class="link">LinkedIn</a>
                    </p>

                    <h2 className="title">Proficiencies</h2>
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