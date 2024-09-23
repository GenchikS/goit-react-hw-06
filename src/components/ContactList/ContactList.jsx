import { useSelector } from "react-redux";
import Contact from "../ContactForm/Contact/Contact";
import css from "./ContactList.module.css";
// import { deleteContact } from "../../redux/contactsSlice";


export default function ContactList() {
  const selectContact = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);
  // console.log("selectNameFilter", selectNameFilter);

  //  перевірка масиву стану
  // console.log("selectContact", selectContact);
  
  return (
    <ul className={css.container}>
      {!selectNameFilter &&
        selectContact.map((contact) => (
          <li className={css.listContactUser} key={contact.id}>
            {/* перевірка ітерації масиву */}
            {/* {console.log("contact.name", contact.name)} */}
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      {selectNameFilter &&
        selectContact
          .filter((contact) =>
            contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
          )
          .map((contact) => (
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


// const selectNameFilter = searchFilter.filter((contact) =>
//   contact.name.toLowerCase().includes(evn.target.value.toLowerCase())
// );


// dispatch(addContact(selectNameFilter));