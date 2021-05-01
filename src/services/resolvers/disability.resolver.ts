import { Resolver, Query } from "type-graphql";

import Disability from "../types/disability.type";
import DisabilityController from "../../components/controller/disability.controller";

@Resolver(Disability)
class DisabilityResolver {
    controller: any;

    constructor() {
        this.controller = new DisabilityController();
    }

    @Query(() => [Disability])
    async disabilities() {
        return await this.controller.index();
    }

    @Query(() => [Disability])
    async seeder() {
        return await this.controller.seed();
    }
}

export default DisabilityResolver;
