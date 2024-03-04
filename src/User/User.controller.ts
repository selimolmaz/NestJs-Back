import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { UserService } from "./User.service"
import { CreateUserDto, LoginUserDto } from "./dto/User.dto"

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }
    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.userService.createUser(createUserDto)
    }


    @Post('login')
    @UsePipes(new ValidationPipe())
    loginUser(@Body() LoginUserDto: LoginUserDto) {
        return this.userService.loginUser(LoginUserDto)
    }

}