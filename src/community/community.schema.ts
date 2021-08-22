import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Post } from 'src/post/post.schema';

@ObjectType()
@Schema({ collection: 'communities', versionKey: false })
export class Community {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true, index: 'text' })
  name: string;

  @Field(() => String)
  @Prop({ index: 'text' })
  title: string;

  @Field(() => String)
  @Prop()
  communityIcon: string;

  @Field(() => Int)
  @Prop({ default: 0 })
  subscribers: number;

  @Field(() => [Post])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Post' })
  posts: MongooseSchema.Types.ObjectId[] | Post[];
}

export type CommunityDocument = Community & Document;

export const CommunitySchema = SchemaFactory.createForClass(Community);