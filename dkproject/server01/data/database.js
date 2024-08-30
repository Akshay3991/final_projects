import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { autoIndex: false })
        .then((c) => console.log(`Database connected ${c.connection.host}`)).catch((e) => {
            console.log(e);

        })
}

