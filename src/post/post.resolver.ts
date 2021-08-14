
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Post } from './post.schema';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) { }

  @Query(() => Post)
  async post(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.postService.getPostById(_id);
  }

  @Query(() => [Post])
  async posts(@Args('filters', { nullable: true }) filters?: any) {
    return this.postService.getPosts(filters);
  }
}