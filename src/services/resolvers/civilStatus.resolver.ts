import { Resolver, Query } from "type-graphql";

import CivilStatus from "../types/civilStatus.type";
import CivilStatusController from "../../components/controller/civilStatus.controller";

@Resolver(CivilStatus)
class CivilStatusResolver {
    controller: any;

    constructor() {
        this.controller = new CivilStatusController();
    }

    @Query(() => [CivilStatus])
    async civilStatus() {
        return await this.controller.index();
    }

    @Query(() => [CivilStatus])
    async seeder() {
        return await this.controller.seed();
    }
}

export default CivilStatusResolver;
