import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Race {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    value: String;
}

export default Race;
