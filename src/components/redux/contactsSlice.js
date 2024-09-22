import { createAction } from "@reduxjs/toolkit";

const initionState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
 };


export const addContact = createAction(`contacts/addContact`);
export const deleteContact = createAction("contacts/deleteContact");
export const selectContacts = createAction("filters/selectContacts");


export const contactsRedus = (state = initionState.contacts, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        items: action.payload,
      };
    case "contacts/deleteContact":
      return {
        items: action.payload,
      };
    case "filters/selectContacts":
      return {
        // contacts: {
        items: action.payload,
        // },
        // filters: state.filters,
      };
    default:
      return state;
  }
};