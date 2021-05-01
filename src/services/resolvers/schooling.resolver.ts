import { Resolver, Query } from "type-graphql";

import Schooling from "../types/schooling.type";
import SchoolingController from "../../components/controller/schooling.controller";

@Resolver(Schooling)
class SchoolingResolver {
    controller: any;

    constructor() {
        this.controller = new SchoolingController();
    }

    @Query(() => [Schooling])
    async schoolings() {
        return await this.controller.index();
    }

    @Query(() => [Schooling])
    async seeder() {
        return await this.controller.seed();
    }
}

export default SchoolingResolver;
