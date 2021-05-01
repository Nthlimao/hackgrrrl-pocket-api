import mongoose from "mongoose";

const mongo_url: string = process.env.MONGO_URL || "";

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);
