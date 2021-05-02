import { Secret, verify } from "jsonwebtoken";
import { AuthChecker } from "type-graphql";
import { MyContext } from "../context";

interface Payload {
    id: string;
}

const AuthMiddleware: AuthChecker<MyContext> = async ({ context }) => {
    const authHeader = context.req.get("Authorization");

    if (!authHeader) return false;

    const parts: string[] = authHeader.split(" ");

    if (!(parts.length === 2)) return false;

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) return false;

    const secret: Secret = process.env.SECRET_JWT || "";

    await verify(token, secret, (err, decoded) => {
        if (err) throw new Error("Token invalid");

        const result = decoded as Payload;
        const payload = { userId: result.id };
        context.payload = payload;
    });

    return true;
};

export default AuthMiddleware;
