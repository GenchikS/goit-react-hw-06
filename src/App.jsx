import { useSelector } from "react-redux";
import css from "./App.module.css";
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from "./components/ContactList/ContactList";
import SearchBox from './components/SearchBox/SearchBox'

function App() {
  const selectContact = useSelector((state) => state.contacts.items);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox/>
      {selectContact.length && <ContactList />}
    </div>
  );
}

export default App;
