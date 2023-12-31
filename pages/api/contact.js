import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_MAIL_CONFIG
const password = process.env.NEXT_PUBLIC_PASS_CONFIG


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });
  export default async function handler(req, res) {
    if (req.method === "POST") {
      const formValues = req.body;
      
      // Server-side form validation
      if (
        !formValues.name ||
        !formValues.email ||
        !formValues.subject ||
        !formValues.message
      )
        return res
          .status(400)
          .json({ message: "Failed: Missing Required Values" });
      try {
        // Validate email and send form values to the validated email
        await transporter.sendMail({
          from: email,
          to: email,
          subject: formValues.subject,
          html: `
          <html>
            <body>
              <p><strong>Name:</strong> ${formValues.name}</p>
              <p><strong>Email:</strong> ${formValues.email}</p>
              <p><strong>Message:</strong></p>
              <p>${formValues.message}</p>
            </body>
          </html>
        `,
        });
        return res
          .status(200)
          .json({ message: "Your message has been successfully sent" });
      } catch (error) {
        return res.status(400).json({
          message: `Failed: ${error.message}`,
        });
      }
    }
  }