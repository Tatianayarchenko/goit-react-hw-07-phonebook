import { ContactsList, ContactsItem, ContactsText } from './Contacts.styled';
import { Button } from '../ui/Button.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'store/contactsApi';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'store/contactsApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const Contacts = () => {
  const filter = useSelector(getFilterValue);

  const { data } = useGetContactsQuery();
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

  useEffect(() => {
    if (result.isError) {
      toast.error('This contact has been deleted');
    }
  }, [result.isError]);

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
