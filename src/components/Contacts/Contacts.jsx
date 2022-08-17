import { ContactsList, ContactsItem, ContactsText } from './Contacts.styled';
import { Button } from '../ui/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts, getContsctsValue, getFilterValue } from 'store/slice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContsctsValue);
  const filter = useSelector(getFilterValue);

  const deleteContact = id => {
    dispatch(removeContacts(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactsText>{name}</ContactsText>
          <ContactsText>{number}</ContactsText>
          <Button onClick={() => deleteContact(id)}>Delete</Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
