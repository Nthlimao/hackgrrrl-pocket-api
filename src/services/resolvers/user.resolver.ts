import { Resolver, Query } from "type-graphql";

import User from "../types/user.type";
import UserController from "../../components/controller/user.controller";

@Resolver(User)
class UserResolver {
    controller: any;

    constructor() {
        this.controller = new UserController();
    }

    @Query(() => [User])
    async users() {
        return await this.controller.index();
    }
}

export default UserResolver;
