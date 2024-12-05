import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'miguelagf300@gmail.com',
        pass: 'Emi.140318'
    }
});

interface EmailOptions {
    to: string;
    subject: string;
    text: string;
}

export const sendConfirmationEmail = ({ to, subject, text }: EmailOptions): void => {
    const mailOptions = {
        from: 'miguelagf300@gmail.com',
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};