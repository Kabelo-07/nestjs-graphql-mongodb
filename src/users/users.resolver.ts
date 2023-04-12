import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/user";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UserResolver {

    constructor(private readonly userService: UsersService) {}
    
    @Query(() => User, { name: 'user', nullable: true})
    getUser(@Args() args: GetUserArgs): Promise<User> {
        return this.userService.getUser(args);
    }

    @Query(() => [User], { name: 'users', nullable: 'items'})
    getUsers(@Args() args: GetUsersArgs): Promise<User[]> {
        return this.userService.getUsers(args);
    }

    @Mutation(() => User, { name: 'createUser'})
    createUser(@Args('createUserData') createUserData: CreateUserInput): Promise<User> {
        return this.userService.createUser(createUserData);
    }

    @Mutation(() => User, {name: 'updateUser'})
    updateUser(@Args('data') data: UpdateUserInput): Promise<User> {
        return this.userService.updateUser(data);
    }

    @Mutation(() => User, {name: 'deleteUser'} )
    deleteUser(@Args('data') data: DeleteUserInput): Promise<User> {
        return this.userService.deleteUser(data);
    }
}
