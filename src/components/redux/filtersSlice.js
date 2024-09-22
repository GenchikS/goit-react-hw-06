import { createAction } from "@reduxjs/toolkit";
export const filtersName = createAction("filters/name");

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
