export type CityType = {
    _id?: string;
    name: string;
};

export type StateType = {
    _id?: string;
    name: string;
    initials: string;
    cities: CityType[];
};

export type CountryType = {
    _id?: string;
    name: string;
    initials: string;
    states: StateType[];
};

type LocalityType = {
    cityCode: string;
    stateCode: string;
    countryCode: string;
};

export default LocalityType;
