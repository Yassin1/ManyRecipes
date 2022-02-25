const nodeMailer = require("nodemailer");
 
exports.sendEmailWithNodemailer = (emailData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "tazrahat96@gmail.com", 
      pass: "gtuetvmanbmdlipo", 
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
 
  return transporter
    .sendMail(emailData)
    .then((info) => {
      console.log(`Message sent: ${info.response}`);
    })
    .catch((err) => console.log(`Problem sending email: ${err}`));
};
