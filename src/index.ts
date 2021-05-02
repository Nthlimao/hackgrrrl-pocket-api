require("dotenv").config();

import "reflect-metadata";
import "./config/connection";

import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

import AuthMiddleware from "./services/middleware/auth.middleware";

import UserResolver from "./services/resolvers/user.resolver";
import SeedResolver from "./services/resolvers/seed.resolver";
import CivilStatusResolver from "./services/resolvers/civilStatus.resolver";
import DisabilityResolver from "./services/resolvers/disability.resolver";
import GenderResolver from "./services/resolvers/gender.resolver";
import RaceController from "./services/resolvers/race.resolver";
import RemunerationResolver from "./services/resolvers/remuneration.resolver";
import SchoolingResolver from "./services/resolvers/schooling.resolver";
import SexualOrientationResolver from "./services/resolvers/sexualOrientation.resolver";
import AuthResolver from "./services/resolvers/auth.resolver";

const init = async () => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            AuthResolver,
            SeedResolver,
            CivilStatusResolver,
            DisabilityResolver,
            GenderResolver,
            RaceController,
            RemunerationResolver,
            SchoolingResolver,
            SexualOrientationResolver,
        ],
        authChecker: AuthMiddleware,
    });

    const server = new ApolloServer({
        schema,
        context: ({ req, res }) => ({ req, res }),
    });
    server.listen({ port: 3100 }, () => console.log("Running"));
};

init();
