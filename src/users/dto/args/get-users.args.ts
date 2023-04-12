import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsOptional} from "class-validator";

@ArgsType()
export class GetUsersArgs {
    
    @Field(() => [String])
    @IsArray()
    userIds: string[];

    @Field({nullable: true})
    fieldName?: string
}
