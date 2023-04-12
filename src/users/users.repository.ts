import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { User, UserDocument } from "./models/user";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async create(data: unknown): Promise<User> {
        const user = new this.userModel(data);
        return user.save();
    }

    async updateUser(filter: FilterQuery<UserDocument>, data: unknown): Promise<User> {
        const user = this.userModel.findOneAndUpdate(filter, data);
        return user;
    }

    async findOne(filter: FilterQuery<UserDocument>): Promise<User> {
        return this.userModel.findOne(filter);
    }

    async findBy(args: GetUsersArgs): Promise<User[]> {
        return this.userModel.find().where(args.fieldName || 'userId').in(args.userIds);
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find({});
    }

    async delete(filter: FilterQuery<UserDocument>): Promise<User> {
        return this.userModel.findOneAndDelete(filter);
    }
}