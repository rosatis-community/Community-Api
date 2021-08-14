import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/models/user.model';

@ObjectType()
@Schema({ collection: 'posts' })
export class Post {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => String)
  @Prop()
  author: string;

  @Field(() => String)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  authorId: MongooseSchema.Types.ObjectId;

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

  @Field(() => Date)
  @Prop()
  created: Date;
}

export type PostDocument = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);