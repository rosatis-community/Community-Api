import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class CreateCommunityInput {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  communityIcon: string;
}