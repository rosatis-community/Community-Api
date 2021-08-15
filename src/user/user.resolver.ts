
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query(() => User)
  async user(@Args('username', { type: () => String }) username: string) {
    return this.userService.getUserByName(username);
  }

  @Query(() => [User])
  async users(@Args('filters', { nullable: true }) filters?: any) {
    return this.userService.getUsers(filters);
  }
}