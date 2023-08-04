import { Paginated } from '@services/common/types';

export type Card = {
  id: string;
  deckId: string;
  userId: string;
  question: string;
  answer: string;
  shots: number;
  answerImg: string;
  questionImg: string;
  questionVideo: string;
  answerVideo: string;
  rating: number;
  created: string;
  updated: string;
};

export type CardsResponse = Paginated<Card>;
