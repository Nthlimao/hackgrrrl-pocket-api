import { Resolver, Query } from "type-graphql";

import Remuneration from "../types/remuneration.type";
import RemunerationController from "../../components/controller/remuneration.controller";

@Resolver(Remuneration)
class RemunerationResolver {
    controller: any;

    constructor() {
        this.controller = new RemunerationController();
    }

    @Query(() => [Remuneration])
    async remunerations() {
        return await this.controller.index();
    }

    @Query(() => [Remuneration])
    async seeder() {
        return await this.controller.seed();
    }
}

export default RemunerationResolver;
