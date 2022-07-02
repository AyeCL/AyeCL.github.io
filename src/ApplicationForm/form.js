import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
import sendSMS from '../modules/sendSMS';
import sendEmail from '../modules/sendEmail';
export default function Form(){
    //   const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [stream, setStream] = useState('');
    const [toSend, setToSend] = useState({
        from_name: "saru",
        name:"",
        message: "Hello there",
        email:"",
        phone:'',
      });
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendSMS(toSend.phone);
      sendEmail(toSend);
    }
    return(
          // Make a form with inputs for name, email, phone number and a dropdown for Stream with options of "Science", "Management", "Humanities" and "Law".
          <div>
              <form  onSubmit={handleSubmit} id='registrationForm'>
                  <label>Name
                      <input type="text" name='name' onChange={handleChange} value={toSend.name}/>
                  </label>
                  <label>Email
                      <input type="email" name='email' onChange={handleChange} value={toSend.email}  />
                  </label>
                  <label>Phone Number
                      <input type="number" name='phone' onChange={handleChange} value={toSend.phone} />
                  </label>
                  <label>Stream
                      <select name='Stream' id='stream'>
                          <option value="Science">Science</option>
                          <option value="Management">Management</option>
                          <option value="Humanities">Humanities</option>
                          <option value="Law">Law</option>
                      </select>
                  </label>
                  <button>Submit</button>
                  
              </form>
              </div>
    )
    };

