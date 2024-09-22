import { createAction } from "@reduxjs/toolkit";
export const changeFilter = createAction("filters/name");

export const filtersRedus = (state = { name: "" }, action) => {
  switch (action.type) {
    case "filters/name":
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};
