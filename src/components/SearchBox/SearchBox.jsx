import { filters } from "../redux/contactsSlice";
import { filtersName } from "../redux/filtersSlice";
import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";


export default function SearchBox({ value }) {
    const selectContact = useSelector((state) => state.contacts.items);
    const dispatch = useDispatch();

    const handleChange = (evn) => {
      // console.log("evn", evn.target.value);
      const searchUser = evn.target.value;
      // console.log("userFilter", userFilter);
      const filtersAll = selectContact.filter((contact) =>
      contact.name.toLowerCase().includes(evn.target.value.toLowerCase())
      );
      // console.log("filtersAll", filtersAll);
      dispatch(filtersName(searchUser));
      return dispatch(filters(filtersAll));
  };
  
  return (
      <div className={css.containerSearchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        className={css.searchInput}
        onChange={handleChange}
      />
      {/* перевірочна строчка введеного значення value */}
      {/* <p>Input: {value}</p> */}
    </div>
  );
}
