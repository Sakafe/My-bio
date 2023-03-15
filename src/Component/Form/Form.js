import React from 'react';
import './Form.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eqr706b', 'template_tvgdlsg', form.current, 'mEQKpmeHja6OdaWCQ')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className='form'>
            <form className='form'ref={form} onSubmit={sendEmail}>
                <label>Your Name:</label>
                <input type="text" placeholder='Type your name' name="from_name" />
                <label>Your Email:</label>
                <input className='email' type="email" placeholder='Type your email' name="from_name" />
                <label>Subject</label>
                <input type="text" placeholder='Type your sub' name="from_name" />
                <label>Message:</label>
                <textarea rows='6' placeholder='Type your message here'name='message'/>
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Form;