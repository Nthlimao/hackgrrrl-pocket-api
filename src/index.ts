require("dotenv").config();

import "reflect-metadata";
import "./config/connection";

import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

import UserResolver from "./services/resolvers/user.resolver";
import SeedResolver from "./services/resolvers/seed.resolver";
// import CategoryResolver from "./graphql/resolvers/category.resolver";

const init = async () => {
    const schema = await buildSchema({
        resolvers: [UserResolver, SeedResolver],
    });
    const server = new ApolloServer({ schema });
    server.listen({ port: 3100 }, () => console.log("Running"));
};

init();
