import { Document } from "mongoose";

export interface Deck extends Document{
    readonly name: String;
    readonly commanderName: String;
    readonly cards : String[];
    readonly colors: String[];

}