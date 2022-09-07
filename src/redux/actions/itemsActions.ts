import { axiosLocal } from "../../services";
import { Dispatch } from "@reduxjs/toolkit";
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../reducers/Common";
import { FIND_ONE_ITEM, SEARCH_ITEMS } from "../reducers/Items";
import { IResultItems } from "../../types/ResultItems";

const dirname = "/src.redux.actions.itemsAction";

export const searchAction = (text: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(FETCH_START());
    try {
      const { data } = await axiosLocal.get(`http://localhost:3333/api/items?q=${encodeURIComponent(text)}`);

      dispatch(FETCH_SUCCESS());
      dispatch({
        type: SEARCH_ITEMS,
        payload: data,
      });
    } catch (error: any) {
      let warnCodes = [401, 403];
      warnCodes.includes(error.response.status) ? console.warn(error.message, dirname) : console.error('payload ' + error.message, dirname);
      dispatch(FETCH_ERROR(error.message));
    }
  };
};

export const getItemAction = (Id: number) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(FETCH_START());
    try {
      const { data } = await axiosLocal.get(`http://localhost:3333/api/items/${Id}`);
      
      dispatch(FETCH_SUCCESS());
      dispatch({
        type: FIND_ONE_ITEM,
        payload: data,
      });
      
    } catch (error: any) {
      let warnCodes = [401, 403];
      warnCodes.includes(error.response.status) ? console.warn(error.message, dirname) : console.error(error.message, dirname);
      dispatch(FETCH_ERROR(error.message));
    }
  };
};
