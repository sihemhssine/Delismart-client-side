
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'hcinesihem14@gmail.com',
    pass: 'thankuALLAH'
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: 'sihemhssine@ieee.org',
  to: 'sihemhssine@ieee.org',
  subject: 'dd',
  text: 'dd'
};

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });