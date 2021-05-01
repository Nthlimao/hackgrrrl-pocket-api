import { ObjectType, Field } from "type-graphql";

@ObjectType()
class City {
    @Field()
    _id: String;
    @Field()
    name: String;
}

@ObjectType()
class State {
    @Field()
    _id: String;
    @Field()
    name: string;
    @Field()
    initials: string;
    @Field((type) => [City])
    cities: City[];
}

@ObjectType()
export class Country {
    @Field()
    _id: String;
    @Field()
    name: String;
    @Field()
    initials: String;
    @Field((type) => [State])
    states: State[];
}
