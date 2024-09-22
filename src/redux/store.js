import { configureStore } from "@reduxjs/toolkit";

//  при використанні createSlice імпорт дефолтний
import  contactsRedus from "./contactsSlice";
import filtersRedus from "./filtersSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user-contact",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsRedus);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersRedus,
  },
});

export const persistor = persistStore(store)


//  після перенесо нам не потрібено
// export const initionState = {
//   contacts: {
//     items: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//   },
//   // filters: {
//   //   name: "",
//   // },
// }; //  пераметр за замовчуваннят


//  після перенесо нам не потрібено
// export const addContact = createAction(`contacts/addContact`);
// export const deleteContact = createAction("contacts/deleteContact");
// export const filters = createAction("filters/filters");
// export const filtersName = createAction("filters/name");


//  екшени редюсерів addContact та deleteContact без використання createAction
// export const addContact = (value) => {
//   // console.log("value Add", value);
//   return {
//     type: "contacts/addContact",
//     payload: value
//   }
// }

// export const deleteContact = (value) => {
//   // console.log("value delete", value);
//   return {
//     type: "contacts/deleteContact",
//     payload: value
//   };
// };

//  екшени редюсеру filters без використання createAction
// export const filters = (value) => {
//   // console.log("filters value", value);
//   return {
//     type: "filters/filters",
//     payload: value,
//   };
// };


//  після перенесо нам не потрібено
//  приклад розділу слайсів
//  слайс контактів
// const contactsRedus = (state = initionState.contacts, action) => {
//   switch (action.type) {
//     case "contacts/addContact":
//       return {
//         items: action.payload,
//       };
//     case "contacts/deleteContact":
//       return {
//         items: action.payload,
//       };
//     case "filters/filters":
//       return {
//         // contacts: {
//           items: action.payload,
//         // },
//         // filters: state.filters,
//       };
//     default:
//       return state;
//   }
// };

//  після перенесо нам не потрібено
//  приклад використання слайсу
// const filtersRedus = (state = {name: ""} , action) => {
//   switch (action.type) {
//     case "filters/name":
//       return {
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };



//  базовий приклад використання redus
// const rootReducer = (state = initionState, action) => {
//   // console.log("rootReducer - action", action);
//   // console.log("action-payload", action.payload);
//   console.log("state", state);

//   switch (action.type) {
//     case "contacts/addContact":
//       return {
//         contacts: {
//           items: action.payload,
//         },
//         filters: state.filters,
//       };
//     case "contacts/deleteContact":
//       return {
//         contacts: {
//           items: action.payload,
//         },
//         filters: state.filters,
//       };
//     case "filters/filters":
//       return {
//         contacts: {
//           items: action.payload,
//         },
//         filters: state.filters,
//       };
//     case "filters/name":
//       return {
//         ...state,
//         filters: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export const store = configureStore({
//   reducer: rootReducer
// });


