import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema({ collection: 'communities' })
export class Community {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => String)
  @Prop()
  communityIcon: string;

  @Field(() => Int)
  @Prop()
  subscribers: number;
}

export type CommunityDocument = Community & Document;

export const CommunitySchema = SchemaFactory.createForClass(Community);