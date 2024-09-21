import { createAction } from "@reduxjs/toolkit";

export const filters = createAction("filters/filters")

// export const filters = (value) => {
//   console.log("filters value", value);
//   return {
//     type: "filters/filters",
//     payload: value,
//   };
// };

//  приклад використання слайсу
export default function filtersRedus(state = { name: "" }, action){
  switch (action.type) {
    case "filters/filters":
      return {
        contacts: {
          items: action.payload,
        },
      };
    default:
      return state;
  }
};
