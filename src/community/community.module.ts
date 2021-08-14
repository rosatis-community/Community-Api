import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunityController } from './community.controller';
import { CommunityResolver } from './community.resolver';
import { Community, CommunitySchema } from './community.schema';
import { CommunityService } from './community.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Community.name, schema: CommunitySchema }]),
  ],
  controllers: [CommunityController],
  providers: [CommunityResolver, CommunityService]
})
export class CommunityModule { }
