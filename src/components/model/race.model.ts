import mongoose from "mongoose";

const RaceSchema = new mongoose.Schema({
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

export default mongoose.model("Race", RaceSchema);
