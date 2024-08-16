const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

//MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/OTP');
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('MongoDB connection error');
});
db.once('open', () => {
    console.log('connected to MongoDB');
});

//Define schema and model for OTP

const otpSchema = new mongoose.Schema({
    email: String,
    otp: String,
    createdAt: { type: Date, expires: '5m', default: Date.now }
});

const OTP = mongoose.model('OTP', otpSchema);

//Generate otp and send email

app.post('/generate-otp', async (req, res) => {
    const { email } = req.body;
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    try {
        await OTP.create({ email, otp });
        //send OTP via email (replace with your email sending Logic)

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'akshaysabharwal92@gmail.com',
            }
        });

        await transporter.sendMail({
            from: 'akshaysabharwal92@gmail.com',
            to: email,
            subject: 'otp Verification',
            text: `Your OTP for verification is: ${otp}`
        });
        res.status(200).send('OTP sent successfully');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error sending OTP');

    }
});
//verify OTP
app.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;
    try {
        const otpRecord = await OTP.findOne({ email, otp }).exec();
        if (otpRecord) {
            res.status(200).send('OTP verified succesfully');

        } else {
            res.status(400).send('Invalid OTP');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error verifying OTP');

    }
});
app.listen(PORT, () => {
    console.log(`Sever is running on http://localhost:${PORT}`);
});
