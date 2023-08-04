import { Nullable } from '@common/types';
import { DecksRequestParams } from '@services/decks/types';

export type DecksSortKey = 'name' | 'updated' | 'cardsCount' | 'userId';

export type DecksSort = Nullable<{
  key: DecksSortKey;
  direction: 'asc' | 'desc';
}>;

export type DeckState = { rangeValues: number[]; params: DecksRequestParams; sort: DecksSort };
