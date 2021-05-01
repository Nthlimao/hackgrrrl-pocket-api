import { Resolver, Query } from "type-graphql";

import Race from "../types/race.type";
import RaceController from "../../components/controller/race.controller";

@Resolver(Race)
class GenderResolver {
    controller: any;

    constructor() {
        this.controller = new RaceController();
    }

    @Query(() => [Race])
    async races() {
        return await this.controller.index();
    }

    @Query(() => [Race])
    async seeder() {
        return await this.controller.seed();
    }
}

export default GenderResolver;
