import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Community, CommunityDocument } from './community.schema';

@Injectable()
export class CommunityService {
  constructor(@InjectModel(Community.name) private postModel: Model<CommunityDocument>) { }

  getCommunityByName(name: string) {
    return this.postModel.findOne({ name }).exec();
  }

  getCommunities(filters: any) {
    return this.postModel.find({ ...filters }).exec();
  }
}
