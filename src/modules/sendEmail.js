import {send} from 'emailjs-com';

function sendEmail(toSend) {
    send("service_9bm0u4r", "template_dox6eoi", toSend, "fMJoqCJ9BFNVQnhsC")
    .then((response) => {
      alert("Email Sent Successfully ");
    })
    .catch((err) => {
      alert(err.text);
    });

}

export default sendEmail