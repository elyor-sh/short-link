import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Link, LinkDocument} from "./link.entity";
import ShortUniqueId from 'short-unique-id'
import {LinkSortDto} from "./dto/link.sort.dto";
import {LinkPaginationDto} from "./dto/link.pagination.dto";

@Injectable()
export class LinkService {

    constructor(@InjectModel('link') private readonly linkRepository: Model<LinkDocument>) {
    }

    async getAll(pagination: LinkPaginationDto) {

        const page = pagination.page || 1
        const limit = pagination.limit || 20

        let sort: LinkSortDto = {}

        const sortObj = {...pagination}

        delete sortObj.limit
        delete sortObj.page

        Object.keys(sortObj).forEach(key => {
            sort = {
                ...sort,
                [key]: sortObj[key]
            }
        })

        const totalCount = await this.linkRepository.count()
        const totalPage = Math.ceil(totalCount / limit)

        const linkQuery = this.linkRepository
            .find()
            .sort({...sort})
            .skip((page < 1 ? 1 : page - 1) * limit)
            .limit(limit < 1 ? 20 : limit)

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

        const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        if(!urlRegex.test(link)){
            throw new HttpException({message: 'Невалидная ссылка'}, HttpStatus.BAD_REQUEST)
        }

        const uid = new ShortUniqueId({length: 9})
        const params = {
            target: link,
            short: uid(),
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
