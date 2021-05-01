import RemunerationModel from "../model/remuneration.model";

class RemunerationController {
    async index() {
        const remunerations = await RemunerationModel.find();
        return remunerations;
    }

    async seed() {
        const remunerations = await RemunerationModel.find();
        if (remunerations.length > 0) return remunerations;

        await RemunerationModel.create({
            name: "Menos de 1 salário mínimo",
            value: "LESS_THAN_1",
        });
        await RemunerationModel.create({
            name: "Entre 1 a 2 salários mínimos",
            value: "BETWEEN_1_AND_2",
        });
        await RemunerationModel.create({
            name: "Entre 3 a 5 salários mínimos",
            value: "BETWEEN_3_AND_5",
        });
        await RemunerationModel.create({
            name: "Entre 6 a 10 salários mínimos",
            value: "BETWEEN_6_AND_10",
        });
        await RemunerationModel.create({
            name: "Mais de 10 salários mínimos",
            value: "MORE_THAN_10",
        });

        return await RemunerationModel.find();
    }
}

export default RemunerationController;
