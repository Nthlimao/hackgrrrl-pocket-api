import { compare } from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

import User from "../model/user.model";

const generateToken = (params = {}) => {
    const secret: Secret = process.env.SECRET_JWT || "";
    return jwt.sign(params, secret, { expiresIn: 86400 });
};

class AuthController {
    async login(email: string, password: string) {
        const user = await User.findOne({
            email,
        }).select("+password");

        if (!user) throw new Error("Usuário inválido!");

        if (!(await compare(password, user.password)))
            throw new Error("Senha inválida!");

        return {
            token: generateToken({ id: user.id }),
        };
    }
}

export default AuthController;
