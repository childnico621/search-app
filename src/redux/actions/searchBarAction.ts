import { Dispatch } from "@reduxjs/toolkit";
import { SET_TEXT, CLEAR_TEXT } from '../reducers/SearchBar';

const dirname = "/src.redux.actions.searchBarAction";

export const setTextAction = (text: string) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch({
                type: SET_TEXT,
                payload: text,
            });
        } catch (error: any) {            
            console.error('payload ' + error.message, dirname);           
        }
    };
};