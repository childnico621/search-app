import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResultItems } from '../../types/ResultItems';

const INIT_STATE: any = {
  result: { author: {} as any, categories: [], items: [] } as IResultItems,
  singleItem: {} as any,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: INIT_STATE,
  reducers: {
    SEARCH_ITEMS: (state, action: PayloadAction<IResultItems>) => {
      state.result = action.payload;
    },
    FIND_ONE_ITEM: (state, action: PayloadAction<any>) => {
      state.singleItem = action.payload;
    }
  }
});

export const { SEARCH_ITEMS, FIND_ONE_ITEM } = itemsSlice.actions

export default itemsSlice.reducer