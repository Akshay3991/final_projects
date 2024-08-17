const mongoose = require('mongoose')

const dotenv = require("dotenv");

dotenv.config();

exports.connect = () => {
    mongoose.connect('mongodb://0.0.0.0:27017/Otp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("DB Connected Successfully✅"))
        .catch((error) => {
            console.log("this error occured" + error)
            process.exit(1)
        })
}