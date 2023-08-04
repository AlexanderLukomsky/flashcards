import { AppRootState } from '@redux/store/types';

export const selectDecksState = (state: AppRootState) => state.decks;
