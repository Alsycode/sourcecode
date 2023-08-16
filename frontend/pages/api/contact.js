export default function (req, res) {
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'shyamalfred@gmail.com',
      pass: 'yjkmdhmxtflkbzfk',
    },
    secure: true, // Set it to true for a secure connection
  });

  const mailData = {
    from: 'shyamalfred@gmail.com',
    to: 'shyamalfred@gmail.com', // Replace this with the recipient's email
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email + req.body.phone,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p><p>Phone Number:${req.body.phone}</p>
    <p>Project title:${req.body.projectTitle}</p>
    <p>Project title:${req.body.dzOther}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to send the email.' });
    } else {
      console.log(info);
      res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
}
