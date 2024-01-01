require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmailAboutAdminPermissions = async (userName, email) => {
  const sendEmailAboutAP = {
    to: 'gadar.andre@gmail.com',
    from: 'userandrii@meta.ua',
    subject: 'Admin permission email - RENTACAR',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-bottom: 20px;">
         <span style="color: #fec100; font-size: 24px;">RENTA</span><span style="color: #3470ff; font-size: 24px;">CAR</span>
        </div>
        <h2 style="color: #4285f4; text-align: center;">Dear RENTACAR Administrator,</h2>
        <p style="color: #555555; text-align: justify;">${userName} with email ${email} has requested admin permissions on the RENTACAR website.</p>
        <p style="color: #555555; text-align: justify;">Please grant the necessary permissions to facilitate their registration process.</p>
        <p style="color: #777777; text-align: right; margin-top: 30px;">Best regards,<br>${userName}</p>
      </div>
    `,
  };

  await sgMail.send(sendEmailAboutAP);
  return true;
};

module.exports = sendEmailAboutAdminPermissions;
