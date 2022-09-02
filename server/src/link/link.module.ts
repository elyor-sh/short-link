import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import {LinkSchema} from "./link.entity";

@Module({
  controllers: [LinkController],
  providers: [LinkService],
  imports: [
    MongooseModule.forFeature([{ name: 'link', schema: LinkSchema }]),
  ]
})
export class LinkModule {}
