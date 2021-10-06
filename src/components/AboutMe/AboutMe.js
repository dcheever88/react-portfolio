import React from 'react';

const AboutMe = () => {
    return (

        <section className="container">
            <h2 className="title">Danny Cheever</h2>
            <div class="d-flex justify-content-evenly mt-5">
                <img id="avatar" src="https://avatars.githubusercontent.com/u/78058224?v=4" alt="Danny Cheever" />

                <p class=" pt-4 fs-4">
                    Growing in my ability <br></br>as a full-stack web developer.
                </p>
            </div>
        </section>
        // <div class="container">
        //     <div class="row m-5">
        //         <div class="col-3">
        //             <img id="avatar" src="https://avatars.githubusercontent.com/u/78058224?v=4" alt="Danny Cheever" />
        //         </div>
        //     <div class="col">
        //         <h1 class="pb-4 pt-4">Danny Cheever</h1>
        //         <p>
        //             Growing in my programming ability. Full-stack web developer.
        //         </p>
        //     </div>
        //     </div>
        // </div>
    );
}

export default AboutMe;