import { IsString } from "class-validator";
import { Colors } from "../schemas/deck.schema";

export class CreateDeckDto {

    @IsString()
    name: String;

    @IsString()
    commanderName: String;

    @IsString()
    cards: String[];

    @IsString()
    colors: String[];

}
