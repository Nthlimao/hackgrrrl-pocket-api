require("dotenv").config();

import "reflect-metadata";
import "./config/connection";

import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

import UserResolver from "./services/resolvers/user.resolver";
import SeedResolver from "./services/resolvers/seed.resolver";
import CivilStatusResolver from "./services/resolvers/civilStatus.resolver";
import DisabilityResolver from "./services/resolvers/disability.resolver";
import GenderResolver from "./services/resolvers/gender.resolver";
import RaceController from "./services/resolvers/race.resolver";
import RemunerationResolver from "./services/resolvers/remuneration.resolver";
import SchoolingResolver from "./services/resolvers/schooling.resolver";
import SexualOrientationResolver from "./services/resolvers/sexualOrientation.resolver";

const init = async () => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            SeedResolver,
            CivilStatusResolver,
            DisabilityResolver,
            GenderResolver,
            RaceController,
            RemunerationResolver,
            SchoolingResolver,
            SexualOrientationResolver,
        ],
    });
    const server = new ApolloServer({ schema });
    server.listen({ port: 3100 }, () => console.log("Running"));
};

init();
