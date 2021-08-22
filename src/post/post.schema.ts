import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Community } from 'src/community/community.schema';
import { User } from 'src/user/user.schema';

@ObjectType()
@Schema({ collection: 'posts' })
export class Post {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => User)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  author: MongooseSchema.Types.ObjectId | User;

  @Field(() => Int)
  @Prop()
  upvote: number;

  @Field(() => Int)
  @Prop()
  downvote: number;

  @Field(() => Int)
  @Prop()
  score: number;

  @Field(() => Int)
  @Prop()
  numComment: number;

  @Field(() => Community)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Community' })
  community: MongooseSchema.Types.ObjectId | Community;

  @Field(() => Date)
  @Prop()
  created_at: Date;
}

export type PostDocument = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);