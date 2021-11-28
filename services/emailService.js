const nodemailer = require(`nodemailer`);

async function sendMail({from , to , subject, text, html}){

    let transpoter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port : process.env.SMTP_PORT,
        secure :false,
        auth : {
             user: process.env.MAIL_USER,
             pass: process.env.MAIL_PASS

        }
    });

    let info = await transpoter.sendMail({
        from : `F-share <${from}>`,
         to,
         subject,
         text,
         html 
        });
        



}

module.exports = sendMail;