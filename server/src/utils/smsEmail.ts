import { configDotenv } from "dotenv";
import { transporter } from "../configs/mail";
configDotenv();
export const sendInformationEmail = async (
  name: string,
  email: string,
  content: string
) => {
  try {
    const mailResponse = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "Thông tin nhận được từ trang web",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thông tin bạn đã gửi</h2>
          <p>Xin chào ${name},</p>
          <p>Chúng tôi đã nhận được thông tin từ bạn. Dưới đây là chi tiết bạn đã gửi:</p>
          <ul>
            <li><strong>Họ tên:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Nội dung:</strong> ${content}</li>
          </ul>
          <p>Cảm ơn bạn đã liên hệ với chúng tôi!</p>
          <p>Trân trọng,</p>
          <p>Đội ngũ hỗ trợ</p>
        </div>
      `,
    });

    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Could not send email. Please check the input data and try again.");
  }
};