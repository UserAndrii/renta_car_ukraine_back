require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmailAdminPermissionNotification = async (userName, email) => {
  const emailNotification = {
    to: email,
    from: 'userandrii@meta.ua',
    subject: 'Notification from RENTACAR - Admin Permission Request',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-bottom: 20px;">
          <span style="color: #fec100; font-size: 24px;">RENTA</span><span style="color: #3470ff; font-size: 24px;">CAR</span>
        </div>
        <h2 style="color: #4285f4; text-align: center;">Dear ${userName},</h2>
        <p style="color: #555555; text-align: justify;">We acknowledge your request for admin rights on the RENTACAR website. A request has been sent to the administrator for permission. Please expect a response within 1-3 days to grant the necessary permissions. Once permission is granted, you will be notified accordingly.</p>
        <p style="color: #555555; text-align: justify;">Also, please ensure that your email is verified on your RENTACAR profile. Administrator permission will not be granted if your email is not confirmed.</p>
        <p style="color: #777777; text-align: right; margin-top: 30px;">Thank you for registering with RENTACAR!</p>
      </div>
    `,
  };

  await sgMail.send(emailNotification);
  return true;
};

module.exports = sendEmailAdminPermissionNotification;
