require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
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
app.use(express.json());

// Configure Gmail SMTP Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to send emails");
  }
});

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ 
    success: true,
    status: "Backend is running",
    timestamp: new Date().toISOString(),
    endpoints: ["/api/contact"]
  });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  console.log("📨 Received contact form submission");
  console.log("Request body:", req.body);

  const { name, email, phone, service, message, contactMethod, budget } = req.body;

  // Validation
  if (!name || !email || !service || !message || !contactMethod) {
    console.log("❌ Validation failed - missing fields");
    return res.status(400).json({ 
      success: false,
      message: "Please fill all required fields" 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("❌ Invalid email format");
    return res.status(400).json({ 
      success: false,
      message: "Invalid email format" 
    });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER, // Use your Gmail as sender
    replyTo: email, // User's email for replies
    to: process.env.GMAIL_USER, // Your Gmail to receive messages
    subject: `🔔 New Contact Form: ${service} - ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #06b6d4; }
          .label { font-weight: bold; color: #334155; display: block; margin-bottom: 5px; }
          .value { color: #475569; }
          .message-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #2563eb; }
          .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">📬 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new message from your website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">👤 Name:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="field">
              <span class="label">📧 Email:</span>
              <span class="value"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></span>
            </div>
            
            <div class="field">
              <span class="label">📱 Phone:</span>
              <span class="value">${phone || "Not provided"}</span>
            </div>
            
            <div class="field">
              <span class="label">🎯 Service Requested:</span>
              <span class="value">${service}</span>
            </div>
            
            <div class="field">
              <span class="label">💰 Budget:</span>
              <span class="value">${budget || "Not specified"}</span>
            </div>
            
            <div class="field">
              <span class="label">📞 Preferred Contact Method:</span>
              <span class="value">${contactMethod}</span>
            </div>
            
            <div class="message-box">
              <span class="label">💬 Message:</span>
              <p class="value" style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>Submitted on ${new Date().toLocaleString()}</p>
            <p>This email was sent from your contact form</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    console.log("📤 Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    
    res.status(200).json({ 
      success: true,
      message: "Message sent successfully! We'll get back to you soon." 
    });
  } catch (err) {
    console.error("❌ SMTP Error:", err);
    res.status(500).json({ 
      success: false,
      message: "Failed to send message. Please try again later." 
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: "Route not found" 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ 
    success: false,
    message: "Internal server error" 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📧 Email configured for: ${process.env.GMAIL_USER}`);
  console.log(`🌐 Ready to receive requests\n`);
});