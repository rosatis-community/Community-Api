
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Community } from './community.schema';
import { CommunityService } from './community.service';

@Resolver(() => Community)
export class CommunityResolver {
  constructor(private communityService: CommunityService) { }

  @Query(() => Community)
  async community(@Args('name', { type: () => String }) name: string) {
    return this.communityService.getCommunityByName(name);
  }

  @Query(() => [Community])
  async communities(@Args('filters', { nullable: true }) filters?: any) {
    return this.communityService.getCommunities(filters);
  }
}