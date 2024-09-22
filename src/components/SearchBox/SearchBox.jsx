import { selectContacts } from "../../redux/contactsSlice";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";


export default function SearchBox() {
    const selectContact = useSelector((state) => state.contacts.items);
    const dispatch = useDispatch();

    const handleChange = (evn) => {
      // console.log("evn", evn.target.value);
      const selectNameFilter = evn.target.value;
      // console.log("userFilter", userFilter);
      const filtersAll = selectContact.filter((contact) =>
        contact.name
          .toLowerCase()
          .includes(evn.target.value.toLowerCase().trim())
      );
      // console.log("filtersAll", filtersAll);
      dispatch(changeFilter(selectNameFilter));
      return dispatch(selectContacts(filtersAll));
  };
  
  return (
      <div className={css.containerSearchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        // value={value}
        className={css.searchInput}
        onChange={handleChange}
      />
     </div>
  );
}
