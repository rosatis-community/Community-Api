import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  getUserByName(username: string) {
    return this.userModel.findOne({ username }).exec();
  }

  getUsers(filters: any) {
    return this.userModel.find({ ...filters }).exec();
  }
}
