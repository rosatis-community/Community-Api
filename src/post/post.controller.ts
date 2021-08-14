import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) { }

  @Get()
  getPosts() {
    return this.postService.getPosts(2);
  }

  // @Get(':id')
  // getPostById(@Param('id') id: string) {
  //   return this.postService.getPostById(id);
  // }
}
