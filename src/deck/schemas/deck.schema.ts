
import mongoose from "mongoose";



export enum Colors {
    WHITE = 'W',
    BLUE = 'U',
    BLACK = 'B',
    RED = 'R',
    GREEN = 'G', 
  }
  

export const DeckSchema = new mongoose.Schema({
  
  name: String,

  commanderName: String,

  cards: [String],

 colors: [String],
})