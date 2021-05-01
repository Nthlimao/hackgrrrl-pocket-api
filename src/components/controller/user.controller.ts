import User from "../model/user.model";

class UserController {
    async index() {
        const users = await User.find();
        return users;
    }
}

export default UserController;
