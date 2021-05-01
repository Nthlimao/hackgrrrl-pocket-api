import SchoolingModel from "../model/schooling.model";

class SchoolingController {
    async index() {
        const schoolings = await SchoolingModel.find();
        return schoolings;
    }

    async seed() {
        const schoolings = await SchoolingModel.find();
        if (schoolings.length > 0) return schoolings;

        await SchoolingModel.create({
            value: "INCOMPLETE_PRIMARY_EDUCATION",
            name: "Ensino Fundamental Incompleto",
        });
        await SchoolingModel.create({
            value: "COMPLETE_PRIMARY_EDUCATION",
            name: "Ensino Fundamental Completo",
        });
        await SchoolingModel.create({
            value: "INCOMPLETE_SCHOOL_EDUCATION",
            name: "Ensino médio Incompleto",
        });
        await SchoolingModel.create({
            value: "COMPLETE_SCHOOL_EDUCATION",
            name: "Ensino médio Completo",
        });
        await SchoolingModel.create({
            value: "INCOMPLETE_HIGH_EDUCATION",
            name: "Ensino superior Incompleto",
        });
        await SchoolingModel.create({
            value: "COMPLETE_HIGH_EDUCATION",
            name: "Ensino superior Completo",
        });

        return await SchoolingModel.find();
    }
}

export default SchoolingController;
