import mongoose from "mongoose";

const RemunerationSchema = new mongoose.Schema({
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

export default mongoose.model("Remuneration", RemunerationSchema);
