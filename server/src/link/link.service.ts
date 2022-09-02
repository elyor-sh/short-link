import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Link, LinkDocument} from "./link.entity";
import ShortUniqueId from 'short-unique-id'
import {LinkQueryDto} from "./dto/link.query.dto";

@Injectable()
export class LinkService {

    constructor(@InjectModel('link') private readonly linkRepository: Model<LinkDocument>) {
    }

    async getAll(query: LinkQueryDto) {

        const page = query.page || 1
        const limit = query.limit || 20

        let sort = {}
        let filter = {}

        Object.keys(query).forEach(key => {
            if(key.includes('sortBy_') && (query[key] === -1 || query[key] === 1)){
                sort = {
                    ...sort,
                    [key.replace('sortBy_', '')]: query[key]
                }
            }

            if(key.includes('filterBy_')){

                const isNum = key === 'filterBy_counter'

                filter = {
                    ...filter,
                    [key.replace('filterBy_', '')]: isNum ? Number(query[key]) : query[key]
                }
            }
        })

        const totalCount = await this.linkRepository.count()
        const totalPage = Math.ceil(totalCount / limit)

        const linkQuery = this.linkRepository
            .find({...filter})
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
