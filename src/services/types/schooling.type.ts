import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Schooling {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    value: String;
}

export default Schooling;
