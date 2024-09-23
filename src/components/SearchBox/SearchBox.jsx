// import { selectContacts } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsSlice";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";


export default function SearchBox() {
  const dispatch = useDispatch();
  const searchFilter  = useSelector((state) => state.filters.items);
    
  const handleChange = (evn) => {
    // console.log("evn", evn.target.value);
    // console.log("searchFilter", searchFilter);
    const selectNameFilter = searchFilter.filter((contact) =>
      contact.name.toLowerCase().includes(evn.target.value.toLowerCase())
    );
    // console.log("selectNameFilter", selectNameFilter);
    //  dispatch введеного значання
    dispatch(changeFilter(evn.target.value));
    //  dispatch відфільтрованного масиву
    return dispatch(addContact(selectNameFilter));
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
