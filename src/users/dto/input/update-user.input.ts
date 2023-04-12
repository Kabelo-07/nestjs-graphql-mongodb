import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {

    @Field()
    @IsNotEmpty()
    userId: string;

    @Field()
    @IsOptional()
    @IsNotEmpty()
    age?: number;

    @Field()
    @IsNotEmpty()
    @IsOptional()
    firstName?: string;

    @Field()
    @IsNotEmpty()
    @IsOptional()
    lastName?: string;


    @Field({ nullable: true})
    @IsOptional()
    isSubscribed?: boolean;
}
