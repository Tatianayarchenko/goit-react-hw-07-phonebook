import { ContactsList, ContactsItem, ContactsText } from './Contacts.styled';
import { Button } from '../ui/Button.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'store/slice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'store/contactsSlice';

export const Contacts = () => {
  const filter = useSelector(getFilterValue);

  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();

  const getVisibleContacts = () => {
    if (data) {
      const filterContacts = data.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filterContacts;
    }
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactsList>
      {data &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <ContactsText>{name}</ContactsText>
            <ContactsText>{number}</ContactsText>
            <Button
              onClick={() => deleteContact(id)}
              disabled={result.isLoading}
            >
              Delete
            </Button>
          </ContactsItem>
        ))}
    </ContactsList>
  );
};
