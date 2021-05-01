import { Resolver, Query } from "type-graphql";

import SexualOrientation from "../types/sexualOrientation.type";
import SexualOrientationController from "../../components/controller/sexualOrientation.controller";

@Resolver(SexualOrientation)
class SexualOrientationResolver {
    controller: any;

    constructor() {
        this.controller = new SexualOrientationController();
    }

    @Query(() => [SexualOrientation])
    async sexualOrientations() {
        return await this.controller.index();
    }

    @Query(() => [SexualOrientation])
    async seeder() {
        return await this.controller.seed();
    }
}

export default SexualOrientationResolver;
