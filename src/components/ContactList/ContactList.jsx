import { useDispatch, useSelector } from "react-redux";
import Contact from "../ContactForm/Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../redux/store";

export default function ContactList() {
  const dispatch = useDispatch();
  const userContact = useSelector((state) => state.contacts.items);
  //  перевірка масиву стану
  // console.log("userContact", userContact);

  function onHandleDelete(evn) {
    //  перевірка введеного ID
    // console.log("id", evn);
    return dispatch(deleteContact(userContact.filter((contact) => contact.id !== evn)));
   
  }

  return (
    <ul className={css.container}>
      {userContact.map((contact) => (
         contact.name.toLowerCase() &&
        <li className={css.listContactUser} key={contact.id}>
          {/* перевірка ітерації масиву */}
          {/* {console.log("contact.name", contact)} */}
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onHandleDelete={onHandleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
