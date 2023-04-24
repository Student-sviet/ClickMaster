import nodemailer from 'nodemailer'

// ...

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Store the selected date in a database
    // ...

    // Send an email notification to the admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'YOUR_GMAIL_ADDRESS',
        pass: 'YOUR_GMAIL_PASSWORD',
      },
    })

    const mailOptions = {
      from: 'YOUR_GMAIL_ADDRESS',
      to: 'ADMIN_EMAIL_ADDRESS',
      subject: 'New booking request',
      html: `<p>A new booking request has been made for ${selectedDate}.</p>`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Failed to send email notification', error)
      } else {
        console.log('Email notification sent', info.response)
      }
    })

    res.status(200).end()
  } else {
    res.status(404).end()
  }
}
