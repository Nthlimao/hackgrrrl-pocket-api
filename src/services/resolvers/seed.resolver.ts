import { Resolver, Query } from "type-graphql";

import LocalitiesSeeder from "../../database/seeds/localities.seeder";
import { Country } from "../types/localities.type";

@Resolver(Country)
class SeedResolver {
    constructor() {}

    @Query(() => [Country])
    async seedsLocalities() {
        return await LocalitiesSeeder();
    }
}

export default SeedResolver;
