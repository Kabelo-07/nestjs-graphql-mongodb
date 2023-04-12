import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@ObjectType()
@Schema()
export class User {

    @Field()
    @Prop()
    userId: string;
    
    @Field()
    @Prop({required: true, unique: true})
    email: string;

    @Field()
    @Prop({required: true})
    firstName: string;

    @Field()
    @Prop({required: true})
    lastName: string;

    @Field(() => Int)
    @Prop({required: true})
    age: number;
    
    @Field({ nullable: true})
    @Prop()
    isSubscribed?: boolean
}

export const UserSchema = SchemaFactory.createForClass(User);