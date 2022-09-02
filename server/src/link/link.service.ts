import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Link, LinkDocument} from "./link.entity";
import {v4} from 'uuid'

@Injectable()
export class LinkService {

    constructor(@InjectModel('link') private readonly linkRepository: Model<LinkDocument>) {
    }

    async getAll(page: number = 1, limit: number = 20) {

        const totalCount = await this.linkRepository.count()
        const totalPage = Math.ceil(totalCount / limit)

        const linkQuery = this.linkRepository.find().skip((page - 1) * limit).limit(limit)

        return {
            paging: {
                totalCount,
                totalPage,
                page,
                limit,
            },
            items: await linkQuery
        }


    }

    async create(link: string, userId: ObjectId): Promise<Link> {
        const params = {
            target: link,
            short: v4(),
            owner: userId,
            counter: 0
        }

        const newLink = new this.linkRepository(params)

        return newLink.save()
    }

    async getOne(key: string): Promise<string> {
        const link = await this.linkRepository.findOne({short: key})

        if (!link) {
            throw new HttpException('Ссылка не найдена', HttpStatus.BAD_REQUEST)
        }

        const updatedLink = await this.linkRepository.findByIdAndUpdate(link._id, {counter: link.counter + 1}, {new: true})

        return updatedLink.target
    }

}
