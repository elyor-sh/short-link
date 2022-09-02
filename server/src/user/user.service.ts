import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User, UserDocument} from "./user.entity";
import {CreateUserDto} from "./dto/user.create.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private userRepository: Model<UserDocument>) {}

    async createUser(dto: CreateUserDto): Promise<User>{
        const candidate = await this.getUserByUserName(dto.username)

        if(candidate) {
            throw new HttpException('Пользователь с таким username уже существует', HttpStatus.BAD_REQUEST)
        }

        const user = new this.userRepository(dto)
        return user.save()
    }

    async getUserByUserName (username: string){
        return this.userRepository.findOne({username})
    }

}
