import bcrypt from "bcryptjs";

import UserModel from "../model/user.model";
import UserType, { UserCompleteType } from "../type/user.type";

class UserController {
    async index() {
        const users = await UserModel.find();

        if (users.length <= 0) {
            throw new Error("Mensagem de erro");
        }

        return users;
    }

    async store(input: UserType) {
        const { email, password } = input;

        const find = await UserModel.findOne({ email }).lean();

        if (find) {
            throw new Error("E-mail já cadastrado");
        }

        const hash = await bcrypt.hash(password, 10);

        try {
            const user = await UserModel.create({
                ...input,
                password: hash,
            });

            return user;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async complete(id: string, complete: UserCompleteType) {
        try {
            const user = await UserModel.findByIdAndUpdate(id, complete, {
                new: true,
            });

            return user;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

export default UserController;
