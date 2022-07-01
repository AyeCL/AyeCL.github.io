import React, { useState } from 'react';
import sendSMS from '../modules/sendSMS';
import sendEmail from '../modules/sendEmail';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // const [stream, setStream] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        sendSMS(phone);
        sendEmail(name, email);
    }

    return (
    // Make a form with inputs for name, email, phone number and a dropdown for Stream with options of "Science", "Management", "Humanities" and "Law".
    <div>
        <form onSubmit={handleSubmit} id='registrationForm'>
            <label>Name
                <input type="text" name='Name' onChange={event => setName(event.target.value)} value={name} />
            </label>
            <label>Email
                <input type="email" name='Student Email' onChange={event => setEmail(event.target.value)} value={email} />
            </label>
            <label>Phone Number
                <input type="number" name='Student Phone' onChange={event => setPhone(event.target.value)} value={phone} />
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
}