import { IsEmail, IsString, minLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(4)
    userName: String;

    @IsEmail()
    email:    String;

    @MinLength(8)
    password: String;

    //deck: Deck;

}
