require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, BASE_URL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (email, verificationToken) => {
  const verifyEmail = {
    to: email,
    from: 'userandrii@meta.ua',
    subject: 'Email Verification - RENTACAR',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-bottom: 20px;">
         <span style="color: #fec100; font-size: 24px;">RENTA</span><span style="color: #3470ff; font-size: 24px;">CAR</span>
        </div>
        <h2 style="color: #4285f4; text-align: center;">Dear User,</h2>
        <p style="color: #555555; text-align: justify;">Thank you for registering on our website. To complete the registration process, please verify your email by clicking the link below:</p>
        <p style="text-align: center; margin-top: 20px;"><a style="display: inline-block; padding: 15px 30px; background-color: #4CAF50; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold; letter-spacing: 1px;" target="_blank" href="https://github.com/UserAndrii/renta_car_ukraine/verify/${verificationToken}">Verify Email</a></p>
        <p style="color: #555555; text-align: justify;">If you didn't sign up on our website, please ignore this email.</p>
        <p style="color: #777777; text-align: right; margin-top: 30px;">Best regards,<br>RENTACAR Team</p>
      </div>
    `,
  };

  await sgMail.send(verifyEmail);
  return true;
};

module.exports = sendEmail;
