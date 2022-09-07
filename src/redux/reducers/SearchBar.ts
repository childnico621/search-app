import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INIT_STATE:any = {
    textToSearch: ''
  };


  export const searchSlice = createSlice({
    name: 'search',
    initialState: INIT_STATE,
    reducers: {
      SET_TEXT: (state, action: PayloadAction<string>) => {
        state.textToSearch = action.payload;
      },
      CLEAR_TEXT: (state) => {
        state.textToSearch = '';
      }     
       
    }
  });
  
  export const { SET_TEXT, CLEAR_TEXT } = searchSlice.actions
  
  export default searchSlice.reducer