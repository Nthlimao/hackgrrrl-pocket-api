type GenderTypes =
    | "AGENDER"
    | "TRANS MAN"
    | "CIS MAN"
    | "TRANS WOMAN"
    | "CIS WOMAN"
    | "NON-BINARY"
    | "NONE"
    | string;

type RaceType =
    | "ASIAN"
    | "BLACK"
    | "BROWN"
    | "INDIGENOUS"
    | "WHITE"
    | "NONE"
    | string;

type SexualOrientationTypes =
    | "ASEXUAL"
    | "BISEXUAL"
    | "GAY"
    | "LESBIAN"
    | "PANSEXUAL"
    | "STRAIGHT"
    | "NONE"
    | string;

type DisabilityTypes =
    | "VISUAL"
    | "PHYSICAL"
    | "AUDITIVE"
    | "INTELECTUAL"
    | "PSYCHOSOCIAL"
    | "NONE"
    | false;

type SchoolingTypes =
    | "Ensino Fundamental Incompleto"
    | "Ensino Fundamental Completo"
    | "Ensino médio Incompleto"
    | "Ensino médio Completo"
    | "Ensino superior Incompleto"
    | "Ensino superior Completo";

type RemunerationTypes =
    | "Menos de 1 salário mínimo"
    | "Entre 1 a 2 salários mínimos"
    | "Entre 3 a 5 salários mínimos"
    | "Entre 6 a 10 salários mínimos";

type CivilStatusType =
    | "Solteira"
    | "Casada"
    | "Divorciada / separada"
    | "Viúva"
    | "Não informado"
    | "Outro";

type LocalityType = {
    city: string;
    state: string;
    country: string;
};

type UserType = {
    _id?: string;
    email: string;
    password: string;
    firstname?: string;
    lastname?: string;
    dateOfBirth?: Date;
    phone: string;
    locality?: LocalityType;
    gender?: GenderTypes;
    sexualOrientation?: SexualOrientationTypes;
    race?: RaceType;
    disability?: DisabilityTypes;
    parenthood?: boolean;
    schooling?: SchoolingTypes;
    remuneration?: RemunerationTypes;
    civilStatus?: CivilStatusType;
    imageProfile?: string;
    naturalness?: "Brasileiro" | string;
};

export default UserType;
