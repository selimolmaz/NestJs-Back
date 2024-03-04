import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.schema";
import { CreateUserDto, LoginUserDto } from "./dto/User.dto";


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    createUser(createUserDto: CreateUserDto) {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    async loginUser(loginUserDto: LoginUserDto): Promise<boolean> {
        const user = await this.userModel.findOne({ email: loginUserDto.email });

        if (!user) {
            console.error('Kullanıcı bulunamadı');
            return false;
        }

        console.log('Kullanıcı bulundu:', user);

        if (!user.password) {
            console.error('User password is undefined');
            return false;
        }
        return user.password == loginUserDto.password
    }

}
