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

  async getCommunityByName(name: string) {
    return await this.communityModel.findOne({ name }).exec();
  }

  async getCommunities(filters: any) {
    return await this.communityModel.find({ ...filters }).exec();
  }

  async searchCommunities(term: string) {
    return await this.communityModel.find({
      $or: [
        { name: { $regex: term, $options: "i" } },
        { title: { $regex: term, $options: "i" } },
      ]
    })
  }
}
