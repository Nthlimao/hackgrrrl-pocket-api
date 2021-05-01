import DisabilityModel from "../model/disability.model";

class DisabilityController {
    async index() {
        const disabilities = await DisabilityModel.find();
        return disabilities;
    }

    async seed() {
        const disabilities = await DisabilityModel.find();
        if (disabilities.length > 0) return disabilities;

        await DisabilityModel.create({ name: "Visual", value: "VISUAL" });
        await DisabilityModel.create({ name: "Física", value: "PHYSICAL" });
        await DisabilityModel.create({ name: "Auditiva", value: "AUDITIVE" });
        await DisabilityModel.create({
            name: "Intelectual",
            value: "INTELECTUAL",
        });
        await DisabilityModel.create({
            name: "Psicossocial",
            value: "PSYCHOSOCIAL",
        });
        await DisabilityModel.create({ name: "Outra", value: "OTHER" });

        return await DisabilityModel.find();
    }
}

export default DisabilityController;
