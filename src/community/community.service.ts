import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommunityInput } from './community.input';
import { Community, CommunityDocument } from './community.schema';

@Injectable()
export class CommunityService {
  constructor(@InjectModel(Community.name) private communityModel: Model<CommunityDocument>) { }

  async createCommunity(createCommunityData: CreateCommunityInput) {
    const createdCommunity = new this.communityModel(createCommunityData);
    return await createdCommunity.save();
  }

  async getCommunity(name: string) {
    return await this.communityModel.findOne({ name }).exec();
  }

  async getCommunityPosts(name: string) {
    const query = await this.communityModel.findOne({ name })
      .populate({
        path: 'posts',
        model: 'Post',
        populate: {
          path: 'author',
          model: 'User'
        }
      })
      .exec();

    return query.posts;
  }

  async getCommunities(filters: any) {
    return await this.communityModel.find({ ...filters }).exec();
  }

  async searchCommunities(term: string) {
    if (!term) throw new Error('hata');
    return await this.communityModel.find({
      $or: [
        { name: { $regex: term, $options: "i" } },
        { title: { $regex: term, $options: "i" } },
      ]
    })
  }
}
