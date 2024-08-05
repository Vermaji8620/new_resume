import express from "express";
const app = express();
import dotenv from "dotenv";
import process from "process";
const PORT = process.env.PORT || 3000;
import nodemailer from "nodemailer";

dotenv.config();
app.use(express.json());

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validateFullName = (fullname) => {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(fullname));
};

app.post("/mail", async (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rajaditya14032002@gmail.com",
        pass: process.env.NODEMAILERPASSWORD,
      },
    });
    const { fullname, email, message } = req.body;
    if (
      !fullname ||
      !email ||
      !message ||
      !validateFullName(fullname) ||
      !validateEmail(email) ||
      message.length < 10
    ) {
      return res.status(401).json({
        message: "All fields are required",
      });
    }
    const mailOptions = {
      to: "vadityaraj67@gmail.com",
      from: email,
      subject: `Your website has a form submission from - ${fullname}`,
      text: `Name: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    try {
      const sendingmail = await transport.sendMail(mailOptions);
      console.log(sendingmail);
      res.status(200).json({
        message: "Mail sent successfully",
        sentmail: sendingmail,
      });
    } catch (err) {
      res.status(403).json({
        message: "Error sending email",
        error_is: err,
      });
    }
  } catch (err) {
    res.status(401).json({
      message: "Mail could not be sent",
      error: err,
    });
  }
});

try {
  app.listen(PORT, () => console.log("up"));
} catch (err) {
  console.log(err);
}
