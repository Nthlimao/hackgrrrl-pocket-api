import RaceModel from "../model/race.model";

class RaceController {
    async index() {
        const genders = await RaceModel.find();
        return genders;
    }

    async seed() {
        const races = await RaceModel.find();
        if (races.length > 0) return races;

        await RaceModel.create({ name: "Asiática", value: "ASIAN" });
        await RaceModel.create({ name: "Preto", value: "BLACK" });
        await RaceModel.create({ name: "Pardo", value: "BROWN" });
        await RaceModel.create({ name: "Indígena", value: "INDIGENOUS" });
        await RaceModel.create({ name: "Branco", value: "WHITE" });
        await RaceModel.create({
            name: "Prefiro não responder",
            value: "NONE",
        });

        return await RaceModel.find();
    }
}

export default RaceController;
