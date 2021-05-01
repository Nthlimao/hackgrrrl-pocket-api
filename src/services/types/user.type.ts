import { ObjectType, Field } from "type-graphql";

@ObjectType()
class User {
    @Field()
    _id: String;
    @Field()
    email: String;
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
    parenthood: String;
    @Field()
    schooling: String;
    @Field()
    remuneration: String;
    @Field()
    civilStatus: String;
    @Field()
    naturalness: String;
    @Field()
    imageProfile: String;
}

export default User;
