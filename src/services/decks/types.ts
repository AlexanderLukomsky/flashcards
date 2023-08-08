import { Nullable } from '@common/types';
import { User } from '@services/auth';
import { Paginated } from '@services/common/types';

export type Deck = {
  author: Pick<User, 'id' | 'name'>;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string;
  rating: number;
  created: string;
  updated: string;
  cardsCount: number;
};

export type DecksResponse = Paginated<Deck> & { maxCardsCount: number };

export type DecksRequestParams = {
  minCardsCount: number;
  maxCardsCount: number;
  name?: string;
  authorId?: string;
  orderBy?: Nullable<
    | 'name-asc'
    | 'name-desc'
    | 'updated-asc'
    | 'updated-desc'
    | 'cardsCount-asc'
    | 'cardsCount-desc'
    | 'userId-asc'
    | 'userId-desc'
  >;
};
