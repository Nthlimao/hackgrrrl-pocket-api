import CivilStatusModel from "../model/civilStatus.model";

class CivilStatusController {
    async index() {
        const status = await CivilStatusModel.find();
        return status;
    }

    async seed() {
        const civilStatus = await CivilStatusModel.find();
        if (civilStatus.length > 0) return civilStatus;

        await CivilStatusModel.create({ name: "Solteiro", value: "SINGLE" });
        await CivilStatusModel.create({ name: "Casado", value: "MARRIED" });
        await CivilStatusModel.create({
            name: "Divorciado",
            value: "DIVORCED",
        });
        await CivilStatusModel.create({
            name: "Viúva/Viúvo",
            value: "WIDOWER",
        });
        await CivilStatusModel.create({ name: "Não informado", value: "NONE" });
        await CivilStatusModel.create({ name: "Outro", value: "OTHER" });

        return await CivilStatusModel.find();
    }
}

export default CivilStatusController;
