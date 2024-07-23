import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Configure the email transport using SMTP or any email sending service
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., Gmail, SendGrid
      auth: {
        user: 'bdosss@gmail.com',
        pass: '071899@fD',
      },
    });

    const mailOptions = {
      from: 'bdoss1@gmail.com',
      to: 'bdoss1@gmail.com',
      subject: 'New Newsletter Signup',
      text: `A new user has signed up for the newsletter with the following email: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}