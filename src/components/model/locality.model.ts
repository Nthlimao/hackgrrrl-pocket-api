import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const StateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    initials: {
        type: String,
        required: true,
    },
    cities: [CitySchema],
});

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    initials: {
        type: String,
        required: true,
    },
    states: [StateSchema],
});

export const CountryModel = mongoose.model("Country", CountrySchema);
