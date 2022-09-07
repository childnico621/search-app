import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Common } from '../../types/Common';

const INIT_STATE: Common = {
    error: '',
    loading: false,
    updatingContent: false,    
    message: '',
  };

  export const commonSlice = createSlice({
    name: 'common',
    initialState: INIT_STATE,
    reducers: {
      FETCH_START: (state) => {
        state.error = '';
        state.message =''; 
        state.loading = true;
      },
      FETCH_SUCCESS: (state) => {
        state.error = '';
        state.message = ''; 
        state.loading = false;
        state.updatingContent = false;
      },      
      FETCH_ERROR: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.message = ''; 
        state.loading = false;
        state.updatingContent = false;
      }            
    }
  });
  
  export const { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } = commonSlice.actions
  
  export default commonSlice.reducer