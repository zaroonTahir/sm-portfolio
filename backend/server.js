require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "https://sm-portfolio-sigma.vercel.app",
    "http://localhost:3000",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.json());

// Configure Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Health check
app.get("/", (req, res) => res.send("Backend running"));

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message, contactMethod, budget } = req.body;

  if (!name || !email || !service || !message || !contactMethod) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER, // your Gmail
    subject: `New Contact Form Submission: ${service}`,
    html: `
      <h3>New Message from Contact Form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
      <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("SMTP Error:", err);
    res.status(500).json({ message: "Failed to send message." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
