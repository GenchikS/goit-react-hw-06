// import css from "./searchbox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { filters } from "../redux/store";

export default function SearchBox({ value }) {
    const userFilter = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();

    const handleChange = (evn) => {
        console.log("evn", evn.target.value);
        dispatch(filters(evn));
            
    // onhandleChange(evn.target.value);
  };
  return (
      <div
        //   className={css.containerSearchBox}
      >
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        // className={css.searchInput}
        onChange={handleChange}
      />
      {/* перевірочна строчка введеного значення value */}
      {/* <p>Input: {value}</p> */}
    </div>
  );
}
