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

export const LocalitySchema = new mongoose.Schema({
    cityCode: {
        type: String,
        required: true,
    },
    stateCode: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: true,
    },
});
