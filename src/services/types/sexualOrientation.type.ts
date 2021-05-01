import { ObjectType, Field } from "type-graphql";

@ObjectType()
class SexualOrientation {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    value: String;
}

export default SexualOrientation;
