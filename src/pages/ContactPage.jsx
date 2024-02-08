import { useState, useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';
import axios from '../axios';

export function ContactPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [contactsLabel, setContactsLabel] = useState({});
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData();
  }, [currentLanguage])

  const loadingData = async () => {
    const responseContactssLabel = await axios.get(`contacts_page_label?lang=${currentLanguage}`);
    setContactsLabel(responseContactssLabel.data[0]);

    const responseContacts = await axios.get(`contacts?lang=${currentLanguage}`);
    setContacts(responseContacts.data[0]);
  }

  return (
    <div>
      <ContactForm contactsLabel={contactsLabel} contacts={contacts} />
    </div>
  );
}

