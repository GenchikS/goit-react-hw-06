import { createAction } from "@reduxjs/toolkit";
// import { initionState } from "./store";

const initionState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  // filters: {
  //   name: "",
  // },
}; //  пераметр за замовчуваннят


export const addContact = createAction("contacts/deleteContact")
// export const deleteContact = createAction("contacts/deleteContact")

// export const addContact = (value) => {
//   console.log("value Add", value);
//   return {
//     type: "contacts/addContact",
//     payload: value,
//   };
// };

export const deleteContact = (value) => {
  console.log("value delete", value);
  return {
    type: "contacts/deleteContact",
    payload: value,
  };
};

//  приклад використання слайсу
export default function contactsRedus(state = initionState.contacts, action){
  switch (action.type) {
    case "contacts/addContact":
      return {
        contacts: {
          items: action.payload,
        },
      };
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: {
          items: action.payload,
        },
      };
    default:
      return state;
  }
};
