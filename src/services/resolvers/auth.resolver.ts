import {
    Resolver,
    Mutation,
    Query,
    Arg,
    Ctx,
    Authorized,
    ObjectType,
    Field,
} from "type-graphql";

import AuthController from "../../components/controller/auth.controller";
import { MyContext } from "../context";

@ObjectType()
class Auth {
    @Field()
    token: String;
}

@Resolver()
class AuthResolver {
    controller: any;

    constructor() {
        this.controller = new AuthController();
    }

    @Mutation(() => Auth)
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string
    ) {
        return await this.controller.login(email, password);
    }

    @Authorized()
    @Query(() => Auth)
    async token(@Ctx() { payload }: MyContext) {
        return { token: payload?.userId || "" };
    }
}

export default AuthResolver;
