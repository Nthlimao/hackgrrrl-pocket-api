import mongoose from "mongoose";

const SexualOrientationSchema = new mongoose.Schema({
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

export default mongoose.model("SexualOrientation", SexualOrientationSchema);
