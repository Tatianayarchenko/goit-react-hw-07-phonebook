import { Button } from '../ui/Button.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useAddContactMutation, useGetContactsQuery } from 'store/contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormContainer, InputForm } from './ContactForm.styled';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      name,
      number,
    };
    const normalizedName = contact.name.toLowerCase();
    data.find(contact => contact.name.toLowerCase() === normalizedName)
      ? toast.error(`${name} is already in contacts`)
      : addContact({ name, number });
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Please, enter your name.'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Please, enter your number.'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <label htmlFor="name">
          Name
          <InputForm type="text" name="name" required />
          <ErrorMessage name="name" component="p" />
        </label>
        <label htmlFor="number">
          Number
          <InputForm type="tel" name="number" required />
          <ErrorMessage name="number" component="p" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};
