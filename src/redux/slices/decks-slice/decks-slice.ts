import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DeckState, DecksSort } from './types';

const initialState: DeckState = {
  params: {
    minCardsCount: 0,
    maxCardsCount: 100,
    orderBy: null,
  },

  sort: null,
  rangeValues: [0, 100],
};

const slice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    setCardsCount: (state) => {
      const [min, max] = state.rangeValues;

      state.params.minCardsCount = min;
      state.params.maxCardsCount = max;
    },

    changeRangeValues: (state, action: PayloadAction<number[]>) => {
      state.rangeValues = action.payload;
    },

    setSort: (state, action: PayloadAction<DecksSort>) => {
      state.sort = action.payload;

      if (action.payload !== null) {
        state.params.orderBy = `${action.payload.key}-${action.payload.direction}`;
        return;
      }

      state.params.orderBy = null;
    },
  },
});

export const { changeRangeValues, setCardsCount, setSort } = slice.actions;

export const decksSlice = slice.reducer;
