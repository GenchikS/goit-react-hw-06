import { useSelector } from "react-redux";
import Contact from "../ContactForm/Contact/Contact";
import css from "./ContactList.module.css";



export default function ContactList() {
  const selectContact = useSelector((state) => state.contacts.items);
  //  перевірка масиву стану
  // console.log("selectContact", selectContact);
  return (
    <ul className={css.container}>
      {selectContact.map((contact) => (
        <li className={css.listContactUser} key={contact.id}>
          {/* перевірка ітерації масиву */}
          {/* {console.log("contact.name", contact)} */}
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
}
