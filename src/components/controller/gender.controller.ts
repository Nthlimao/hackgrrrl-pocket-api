import GenderModel from "../model/gender.model";

class GenderController {
    async index() {
        const genders = await GenderModel.find();
        return genders;
    }

    async seed() {
        const genders = await GenderModel.find();
        if (genders.length > 0) return genders;

        await GenderModel.create({ name: "Sem Gênero", value: "AGENDER" });
        await GenderModel.create({ name: "Homem Trans", value: "TRANS MAN" });
        await GenderModel.create({ name: "Homem Cis", value: "CIS MAN" });
        await GenderModel.create({
            name: "Mulher Trans",
            value: "TRANS WOMAN",
        });
        await GenderModel.create({ name: "Mulher Cis", value: "CIS WOMAN" });
        await GenderModel.create({ name: "Não Binário", value: "NON-BINARY" });
        await GenderModel.create({
            name: "Prefiro não responder",
            value: "NONE",
        });
        await GenderModel.create({ name: "Outro", value: "OTHER" });

        return await GenderModel.find();
    }
}

export default GenderController;
