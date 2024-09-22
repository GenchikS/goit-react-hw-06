import { useDispatch, useSelector } from "react-redux";
import Contact from "../ContactForm/Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";


export default function ContactList() {
  const dispatch = useDispatch();
  const selectContact = useSelector((state) => state.contacts.items);
  //  перевірка масиву стану
  // console.log("userContact", userContact);

  function onHandleDelete(evn) {
    // console.log("userContact", selectContact);
    //  перевірка введеного ID
    // console.log("id", evn);
    const deleteUser = selectContact.filter((contact) => contact.id !== evn);
    // console.log("deleteUser", deleteUser);
    return dispatch(deleteContact(deleteUser));
   
  }

  return (
    <ul className={css.container}>
      {/* {console.log("selectContact", selectContact)} */}
      {selectContact.map(
        (contact) =>
          contact.name.toLowerCase() && (
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
          )
      )}
    </ul>
  );
}
