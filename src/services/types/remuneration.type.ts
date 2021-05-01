import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Remuneration {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    value: String;
}

export default Remuneration;
