import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";

import User, { RegisterInput, CompleteInput } from "../types/user.type";
import UserController from "../../components/controller/user.controller";

@Resolver(User)
class UserResolver {
    controller: any;

    constructor() {
        this.controller = new UserController();
    }

    @Authorized()
    @Query(() => [User])
    async users() {
        return await this.controller.index();
    }

    @Mutation(() => User)
    async createUser(@Arg("RegisterInput") registerInput: RegisterInput) {
        return await this.controller.store(registerInput);
    }

    @Mutation(() => User)
    async completeUser(
        @Arg("CompleteInput") completeInput: CompleteInput,
        @Arg("Id") id: string
    ) {
        return await this.controller.complete(id, completeInput);
    }
}

export default UserResolver;
