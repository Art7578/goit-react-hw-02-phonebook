import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/contactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const normalizedName = this.normalizedContact(data);
    if (
      this.state.contacts.some(
        item => this.normalizedContact(item) === normalizedName
      )
    ) {
      alert(`${normalizedName} is already in contacts`);
      return;
    }
    this.addContact(data)
  };

  addContact = contactValue => {
    const contact = {
      id: nanoid(),
      name: contactValue.name,
      number: contactValue.number,
    };
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    const {value} = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      this.normalizedContact(contact).includes(normalizedFilter)
      );
  };

  normalizedContact = text => {
    return text.name.toLocaleLowerCase();
  };

  render() {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div 
        style={{
          jusifyContent: 'center',
          alignItems: 'center',
          fontSize: 15,
          fontWeight: 500,
          padding:' 20px 45px',
          }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList
          contacts={visibleContacts}
          onSubmit={this.addContact}
          onDeleteConact={this.deleteContact}/>
      </div>
    );
  }
}
