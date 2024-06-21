// email-sender.js
const nodemailer = require('nodemailer');

// Create transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'betigomgom@gmail.com',
    pass: '********'
  }
});

// Email options
let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello from Node.js!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
