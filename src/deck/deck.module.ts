import { Module } from '@nestjs/common';
import { DeckService } from './providers/deck.service';
import { DeckController } from './deck.controller';
import { DatabaseModule } from 'src/database/database.module';
import { deckProvider } from './providers/deck.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DeckController],
  providers: [
    DeckService,
    ...deckProvider,
  ],
})
export class DeckModule {}
