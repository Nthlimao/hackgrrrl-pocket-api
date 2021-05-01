import { Resolver, Query } from "type-graphql";

import Gender from "../types/gender.type";
import GenderController from "../../components/controller/gender.controller";

@Resolver(Gender)
class GenderResolver {
    controller: any;

    constructor() {
        this.controller = new GenderController();
    }

    @Query(() => [Gender])
    async genders() {
        return await this.controller.index();
    }

    @Query(() => [Gender])
    async seeder() {
        return await this.controller.seed();
    }
}

export default GenderResolver;
