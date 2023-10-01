const nodemailer = require('nodemailer');

const createGmailTransporter = () => {
  const hostmame = process.env.SMTP_SERVER;
  const port = Number (process.env.SMTP_PORT);
  const username = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: hostmame,
    port: port,
    secure: true,
    auth: {
      user: username,
      pass: password
    },
    logger: false
  });

  return transporter;
};

const sendNodeMailer = async (data) => {
  const transporter = createGmailTransporter();

  const info = await transporter.sendMail(data);

  return info
};

module.exports = { sendNodeMailer };