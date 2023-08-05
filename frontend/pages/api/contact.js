import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { dzName, dzEmail, dzMessage } = req.body;

      // Create a transporter with your email provider settings
      const transporter = nodemailer.createTransport({
        host: 'your_smtp_host',
        port: 587,
        secure: false,
        auth: {
          user: 'your_email_address',
          pass: 'your_email_password',
        },
      });

      // Define the email content
      const mailOptions = {
        from: 'your_email_address',
        to: 'your_inbox_email_address',
        subject: 'New contact form submission',
        text: `Name: ${dzName}\nEmail: ${dzEmail}\nMessage: ${dzMessage}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}