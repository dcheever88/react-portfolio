import React from 'react';
// import React, {useState} from 'react';
// import { validateEmail } from '../../utils/helpers';

function ContactMe() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             setErrorMessage('');
    //         } 
    //     } else {
    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         }
      

    //     if (!errorMessage) {
    //     setFormState({...formState, [e.target.name]: e.target.value });
    //     }
    
    // };
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    // return (
    // <section>
    //     <h1 data-testid="h1tag">Contact me</h1>
    //     <form id="contact-form" onSubmit={handleSubmit}>
    //         <div>
    //             <label htmlFor="name">Name:</label>
    //             <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //         </div>
    //         <div>
    //             <label htmlFor="email">Email address:</label>
    //             <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //         </div>
    //         <div>
    //             <label htmlFor="message">Message:</label>
    //             <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
    //         </div>
    //         {errorMessage && (
    //             <div>
    //                 <p className="error-text">{errorMessage}</p>
    //             </div>
    //         )}
    //         <button data-testid="button" type="submit">Submit</button>
    //     </form>
    // </section>
    // );

    // simple contact info for this project
    return (
    <section className="container">
        <h1 className="title">Contact Me!</h1>

        <div class="mt-5">
            Email Address: cheeverdanny@gmail.com
        </div>
        <div class="mt-5">
            Phone Number: 715.292.3757
        </div>
    </section>
    );
}

export default ContactMe;
