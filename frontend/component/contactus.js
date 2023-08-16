import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');

    let data = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage(''); // Fix the variable name here
      }
    });
  };

  return (
    <div className='items-center flex-column flex'>
      <form className='items-center flex-column flex'>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <input type='text' onChange={(e) => setMessage(e.target.value)} name='message' />
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
