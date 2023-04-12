import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user";
import { UserRepository } from "./users.repository";
import { UserResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
    providers: [UserResolver, UserRepository, UsersService],
    imports: [MongooseModule.forFeature([
        {name: User.name, schema: UserSchema}
    ])]
})
export class UsersModule {}