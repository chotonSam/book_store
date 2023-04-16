import { SEARCHFILTER, STATUSCHANGE } from "./actionTypes";

export const statusChange = (status) => {
  return {
    type: STATUSCHANGE,
    payload: status,
  };
};

export const searchFilter = (value) => {
  return {
    type: SEARCHFILTER,
    payload: value,
  };
};
