import { ObjectType, Field } from "type-graphql";

@ObjectType()
class CivilStatus {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    value: String;
}

export default CivilStatus;
