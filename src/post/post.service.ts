import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

  getPostById(_id: MongooseSchema.Types.ObjectId) {
    return this.postModel.findById(_id).exec();
  }

  getPosts(filters: any) {
    return this.postModel.find({ ...filters }).populate("author community").exec();
  }
}