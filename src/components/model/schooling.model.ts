import mongoose from "mongoose";

const SchoolingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model("Schooling", SchoolingSchema);
