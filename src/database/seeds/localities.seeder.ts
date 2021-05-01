import { CountryModel } from "../../components/model/locality.model";

const LocalitiesSeeder = async () => {
    const countries = await CountryModel.find();
    if (countries.length > 0) return countries;
    
    return await CountryModel.create({
        name: "Brasil",
        initials: "BR",
        states: [
            { name: "Acre", initials: "AC", cities: [{ name: "Rio Branco" }] },
            { name: "Paraná", initials: "PR", cities: [{ name: "Curitiba" }] },
            {
                name: "Pernambuco",
                initials: "PE",
                cities: [
                    { name: "Olinda" },
                    { name: "Ilha de Itamaracá" },
                    { name: "Recife" },
                ],
            },
            {
                name: "Rio de Janeiro",
                initials: "RJ",
                cities: [{ name: "Rio de Janeiro" }],
            },
            {
                name: "São Paulo",
                initials: "SP",
                cities: [{ name: "	São Paulo" }],
            },
        ],
    });
};

export default LocalitiesSeeder;
