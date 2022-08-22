import { ContactsList, ContactsItem, ContactsText } from './Contacts.styled';
import { Button } from '../ui/Button.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeContacts, getContsctsValue, getFilterValue } from 'store/slice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'store/contactsSlice';

export const Contacts = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContsctsValue);
  // const filter = useSelector(getFilterValue);

  //
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();
  console.log('resalt: ', result);
  // console.log('error: ', error);
  // console.log('isLoading: ', isLoading);

  // const deleteContact = id => {
  //   const del = useDeleteContactMutation(id);
  //   console.log(del);
  // };

  // const deleteContact = id => {
  //   dispatch(removeContacts(id));
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <ContactsList>
      {data &&
        data.map(({ id, name, number }) => (
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
      {/* //=========================== */}
      {/* {visibleContacts.map(({ id, name, number }) => ( */}
      {/* <ContactsItem key={id}> */}
      {/* <ContactsText>{name}</ContactsText> */}
      {/* <ContactsText>{number}</ContactsText> */}
      {/* <Button onClick={() => deleteContact(id)}>Delete</Button> */}
      {/* </ContactsItem> */}
      {/* ))} */}
    </ContactsList>
  );
};
