const nodeMailer = require("nodemailer");
 
exports.sendEmailWithNodemailer = (emailData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "tazrahat96@gmail.com", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
      pass: "gtuetvmanbmdlipo", // MAKE SURE THIS PASSWORD IS YOUR GMAIL APP PASSWORD WHICH YOU GENERATED EARLIER.
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
