import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
  name: "filters",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      return {
          // ...state,
        name: action.payload,
      };
    },
  },
});



// export const changeFilter = createAction("filters/name");

// export const filtersRedus = (state = { name: "" }, action) => {
//   switch (action.type) {
//     case "filters/name":
//       return {
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };


export const { changeFilter } = slice.actions;
export default slice.reducer;
