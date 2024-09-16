import { Inject, Injectable } from '@nestjs/common';
import { CreateDeckDto } from '../dto/create-deck.dto';
import { UpdateDeckDto } from '../dto/update-deck.dto';
import { Model } from 'mongoose';
import { Deck } from './deck.interface';
import { response } from 'express';

@Injectable()
export class DeckService {
  constructor(
    @Inject('DECK_MODEL')
    private deckModel: Model<Deck>,
  ) {}

  ///create deck
  async create(createDeckDto: CreateDeckDto): Promise<Deck> {

    let deck = createDeckDto
    await fetch('https://api.scryfall.com/cards/random')
      .then((response) => {
        return response.json();
      })
      .then((r) => {
        deck.commanderName = r.name;
        deck.colors = r.color_identity;
      });


      await fetch('https://api.scryfall.com/cards/random')

    const createdDeck = new this.deckModel(createDeckDto);
    console.log('teste', createdDeck);
    return createdDeck.save();
  }

  async findAll(): Promise<Deck[]> {
    return await this.deckModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} deck`;
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck`;
  }
}
