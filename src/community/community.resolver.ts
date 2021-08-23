
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from 'src/post/post.schema';
import { CreateCommunityInput } from './community.input';
import { Community } from './community.schema';
import { CommunityService } from './community.service';

@Resolver(() => Community)
export class CommunityResolver {
  constructor(private communityService: CommunityService) { }

  @Query(() => Community)
  async community(@Args('name', { type: () => String }) name: string) {
    return this.communityService.getCommunity(name);
  }

  @Query(() => [Post])
  async communityPosts(@Args('name', { type: () => String }) name: string) {
    return this.communityService.getCommunityPosts(name);
  }

  @Query(() => [Community])
  async communities(@Args('filters', { nullable: true }) filters?: any) {
    return this.communityService.getCommunities(filters);
  }

  @Query(() => [Community])
  async searchCommunities(@Args('term', { type: () => String }) term: string) {
    return this.communityService.searchCommunities(term);
  }

  @Mutation(() => Community)
  async createCommunity(@Args('payload') payload: CreateCommunityInput) {
    return this.communityService.createCommunity(payload);
  }
}