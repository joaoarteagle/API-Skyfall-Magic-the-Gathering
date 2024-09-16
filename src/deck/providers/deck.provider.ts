
import { Connection } from "mongoose";
import { DeckSchema } from "../schemas/deck.schema";


export const deckProvider = [
    {
        provide: 'DECK_MODEL',
        useFactory: (connection: Connection) => connection.model('Deck', DeckSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]