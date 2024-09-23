// import { selectContacts } from "../../redux/contactsSlice";
// import { useSelector } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

import { useDispatch} from "react-redux";


export default function SearchBox() {
  const dispatch = useDispatch();
  // const selectNameFilter = useSelector((state) => state.filters.name);
  
  const handleChange = (evn) => {
    // console.log("evn", evn.target.value);
    
    
    //  dispatch введеного значання
    
    // console.log("selectNameFilter", selectNameFilter);
    return dispatch(changeFilter(evn.target.value));
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
