import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Gender {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    value: String;
}

export default Gender;
