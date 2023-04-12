import { Injectable } from "@nestjs/common";
import { User } from "./models/user";
import {v4 as uuidv4} from 'uuid';
import { UpdateUserInput } from "./dto/input/update-user.input";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { CreateUserInput } from "./dto/input/create-user.input";
import { UserRepository } from "./users.repository";

@Injectable()
export class UsersService {

    constructor(private readonly repository: UserRepository) {}

    private users: User[] = [];

    async createUser(data: CreateUserInput): Promise<User> {
        const user = this.repository.create({userId: uuidv4(), ...data});
        return user;
    }

    async updateUser(data: UpdateUserInput): Promise<User> {
        const user = this.repository.updateUser({userId: data.userId}, data);

        return user;
    }

    async getUser(args: GetUserArgs): Promise<User> {
        return this.repository.findOne({userId: args.userId});
    }

    async getUsers(args: GetUsersArgs): Promise<User[]> {
        if (!args.userIds || args.userIds.length == 0) {
            return this.repository.findAll();
        }
        return this.repository.findBy(args);
    }

    async deleteUser(data: DeleteUserInput): Promise<User> {
        return this.repository.delete(data);
    }
}
