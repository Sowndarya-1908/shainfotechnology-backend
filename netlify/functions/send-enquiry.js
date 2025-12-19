import nodemailer from "nodemailer";

export async function handler(event) {
  try {
    console.log("🔥 Function triggered");

    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const data = JSON.parse(event.body);
    console.log("📩 Enquiry data received:", data);

    const {
      OWNER_EMAIL,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
    } = process.env;

    console.log("🔐 SMTP config loaded");

    if (!SMTP_USER || !SMTP_PASS) {
      throw new Error("Missing SMTP credentials");
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ SMTP verified");

    const mailOptions = {
      from: `"Sha Infotechnology" <${SMTP_USER}>`,
      to: OWNER_EMAIL,
      subject: "📩 New Website Enquiry",
      html: `
        <h3>New Enquiry Received</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Service:</b> ${data.service}</p>
        <p><b>Message:</b><br/>${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("❌ EMAIL ERROR:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
