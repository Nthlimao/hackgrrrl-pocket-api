import SexualOrientationModel from "../model/schooling.model";

class SexualOrientationController {
    async index() {
        const orientations = await SexualOrientationModel.find();
        return orientations;
    }

    async seed() {
        const orientations = await SexualOrientationModel.find();
        if (orientations.length > 0) return orientations;

        await SexualOrientationModel.create({
            name: "Assexuado",
            value: "ASEXUAL",
        });
        await SexualOrientationModel.create({
            name: "Bissexual",
            value: "BISEXUAL",
        });
        await SexualOrientationModel.create({ name: "Gay", value: "GAY" });
        await SexualOrientationModel.create({
            name: "Lésbica",
            value: "LESBIAN",
        });
        await SexualOrientationModel.create({
            name: "Pansexual",
            value: "PANSEXUAL",
        });
        await SexualOrientationModel.create({
            name: "Hétero",
            value: "STRAIGHT",
        });
        await SexualOrientationModel.create({
            name: "Prefiro não responder",
            value: "NONE",
        });
        await SexualOrientationModel.create({ name: "Outra", value: "OTHER" });

        return await SexualOrientationModel.find();
    }
}

export default SexualOrientationController;
