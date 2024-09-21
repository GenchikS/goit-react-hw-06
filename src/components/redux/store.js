import { configureStore } from "@reduxjs/toolkit";

// export const reduceStateItem = (state = initionState.contacts.action)=> {
//  return
// };


export const addContact = (value) => {
  console.log("value Add", value);
  return {
    type: "contacts/addContact",
    payload: value
  }
}

export const deleteContact = (value) => {
  console.log("value delete", value);
  return {
    type: "contacts/deleteContact",
    payload: value
  };
};

export const filters = (value) => {
  console.log("value", value);
  return {
    type: "filters/filters",
    payload: value,
  };
};

export const initionState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
}; //  пераметр за замовчуваннят

const rootReducer = (state = initionState, action) => {
  // console.log("rootReducer - action", action);
  // console.log("action-payload", action.payload);
  console.log("state", state);

  switch (action.type) {
    case "contacts/addContact": 
      return {
        ...state,
        contacts: {
          items: [...state, action.payload],
        },
      };
    case "contacts/deleteContact":
      return {
        contacts: {
          items: action.payload
        },
      };
    default:
      return state;
  }
  // case "filters/filters": 
  //   return {
  //      filters: {
  //       name: action.payload
  //     },
  //   };
  //   default:
  //   return state;
  // }
}

export const store = configureStore({
    reducer: rootReducer,
})
