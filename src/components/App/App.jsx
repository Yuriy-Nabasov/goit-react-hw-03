import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../contactData.json";

import { Analytics } from "@vercel/analytics/react";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [myFilter, setMyFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(myFilter.toLocaleLowerCase())
  );

  return (
    <Section>
      <Container>
        <Heading title="Phonebook" bottom tag={`h1`} />
        <ContactForm onAdd={addContact} />
        <SearchBox value={myFilter} onFilter={setMyFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        <Analytics />
      </Container>
    </Section>
  );
}
