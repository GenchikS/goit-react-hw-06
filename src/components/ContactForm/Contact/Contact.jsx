import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../../redux/contactsSlice";

export default function Contact({ name, number, id}) {
  const dispatch = useDispatch();

   function onHandleDelete(evn) {
     //  перевірка введеного ID
     // console.log("id", evn);
     return dispatch(deleteContact(evn));
   }
  // console.log("name", name);  //  перевірка компонентів яки приходять
  // console.log("numbere", number);
  return (
    <div className={css.container}>
      <ul className={css.containerList}>
        <li>
          <p className={css.textName}>{name}</p>
        </li>
        <li>
          <p className={css.textNumber}>{number}</p>
        </li>
      </ul>
      <button onClick={() => onHandleDelete(id)} className={css.buttomDelete}>
        Delete
      </button>
    </div>
  );
}
