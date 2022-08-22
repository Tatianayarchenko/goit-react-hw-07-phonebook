import { Button } from '../ui/Button.styled';
import { InputForm } from '../ui/Input.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yap from 'yup';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'store/contactsSlice';

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
      ? alert(`${name} is already in contacts`)
      : addContact({ name, number });
    resetForm();
  };

  const schema = yap.object().shape({
    name: yap.string().required('Please, enter your name.'),
    number: yap.number().positive().required('Please, enter your number.'),
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
      <Form>
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
      </Form>
    </Formik>
  );
};

//==========================================================
// import { nanoid } from 'nanoid';
// import { Button } from '../ui/Button.styled';
// import { InputForm } from '../ui/Input.styled';
// import { Formik, Form, ErrorMessage } from 'formik';
// import * as yap from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, getContsctsValue } from 'store/slice';

// export const ContactForm = () => {
//   const contacts = useSelector(getContsctsValue);
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     formSubmitHendler(values);
//     resetForm();
//   };

//   const schema = yap.object().shape({
//     name: yap.string().required('Please, enter your name.'),
//     number: yap.number().positive().required('Please, enter your number.'),
//   });

//   const formSubmitHendler = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     const normalizedName = contact.name.toLowerCase();
//     contacts.find(contact => contact.name.toLowerCase() === normalizedName)
//       ? alert(`${name} is already in contacts`)
//       : dispatch(addContact({ id: nanoid(), name, number }));
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <label htmlFor="name">
//           Name
//           <InputForm type="text" name="name" required />
//           <ErrorMessage name="name" component="p" />
//         </label>
//         <label htmlFor="number">
//           Number
//           <InputForm type="tel" name="number" required />
//           <ErrorMessage name="number" component="p" />
//         </label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     </Formik>
//   );
// };
