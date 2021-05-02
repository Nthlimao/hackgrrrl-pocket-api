import { ObjectType, Field, InputType } from "type-graphql";

import Locality, { LocalityInput } from "./localities.type";

@ObjectType()
class User {
    @Field()
    _id: String;
    @Field()
    email: String;
    @Field({ nullable: true })
    firstname?: String;
    @Field({ nullable: true })
    lastname?: String;
    @Field({ nullable: true })
    phone?: String;
    @Field({ nullable: true })
    dateOfBirth?: Date;
    @Field({ nullable: true })
    gender?: String;
    @Field({ nullable: true })
    sexualOrientation?: String;
    @Field({ nullable: true })
    race?: String;
    @Field({ nullable: true })
    disability?: String;
    @Field({ nullable: true })
    parenthood?: Boolean;
    @Field({ nullable: true })
    schooling?: String;
    @Field({ nullable: true })
    remuneration?: String;
    @Field({ nullable: true })
    civilStatus?: String;
    @Field({ nullable: true })
    naturalness?: String;
    @Field({ nullable: true })
    locality?: Locality;
}

@InputType()
export class RegisterInput {
    @Field()
    email: String;
    @Field()
    password: String;
}

@InputType()
export class CompleteInput {
    @Field()
    firstname: String;
    @Field()
    lastname: String;
    @Field()
    phone: String;
    @Field()
    dateOfBirth: Date;
    @Field()
    gender: String;
    @Field()
    sexualOrientation: String;
    @Field()
    race: String;
    @Field()
    disability: String;
    @Field()
    parenthood: Boolean;
    @Field()
    schooling: String;
    @Field()
    remuneration: String;
    @Field()
    civilStatus: String;
    @Field()
    naturalness: String;
    @Field()
    locality: LocalityInput;
}

export default User;
