const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const env = require('dotenv').config()
app.use(express.static(path.join(__dirname, "/client/build/")));
app.use(express.json())
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/client/build/', 'index.html'))
});
  
app.get('/projects/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/', 'index.html'))
  });
  


app.get('/api/', (req,res) =>{
  
});
app.post('/api/email/', (req,res) =>{
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    }, 
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.NODEMAIL}`
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: '"Leonardo Capone" <leocapone@hotmail.com>', // sender address (who sends)
    to: `leocapone@hotmail.com, ${req.body.email}`, // list of receivers (who receives)
    subject: `Page notification `, // Subject line
    text: `Thanks ${req.body.name} for your reply `, // plaintext body
    html: `<b>Contact Phone: ${req.body.phone}</b><br><b>Message: </b><p>${req.body.message}<p><br> ` // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    alert('Message sent!');
});

  // Message object
  // let message = {
  //     from: 'Leonardo Capone',

  //     // Comma separated list of recipients
  //     to: 'Leonardo Capone <leocapone@hotmail.com>',
  //     bcc: `<${req.query.email}>`,

  //     // Subject of the message
  //     subject: 'Contact Leonardo Capone',


  //     // HTML body
  //     html:
  //        `<div>
  //         <h2>Thanks ${req.query.name} for contact with me, in a few days i will being replying</h2>
  //         <p> Main Messaaage:</p>
  //         <p>${req.query.message}</p>
  //         <p>My phone is: ${req.query.phone}</p>
  //         </div>`,

  // };



});


const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);