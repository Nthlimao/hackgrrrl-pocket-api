import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    phone: {
        type: String,
    },
    locality: {
        type: String,
    },
    gender: {
        type: String,
    },
    sexualOrientation: {
        type: String,
    },
    race: {
        type: String,
    },
    disability: {
        type: String,
    },
    remuneration: {
        type: String,
    },
    civilStatus: {
        type: String,
    },
    imageProfile: {
        type: String,
    },
    naturalness: {
        type: String,
    },
});

export default mongoose.model("User", UserSchema);
