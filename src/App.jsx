import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import { useState } from 'react';

export default function App() {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList filter={filter} />
    </div>
  );
}
