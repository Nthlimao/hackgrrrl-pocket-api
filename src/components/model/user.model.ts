import mongoose from "mongoose";

import { LocalitySchema } from "./locality.model";
import { IUser } from "../type/user.type";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
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
    locality: LocalitySchema,
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
    parenthood: {
        type: Boolean,
    },
    schooling: {
        type: String,
    },
    remuneration: {
        type: String,
    },
    civilStatus: {
        type: String,
    },
    naturalness: {
        type: String,
    },
});

export default mongoose.model<IUser>("User", UserSchema);
