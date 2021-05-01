import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Disability {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    value: String;
}

export default Disability;
