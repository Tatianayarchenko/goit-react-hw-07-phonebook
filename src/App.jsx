import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Container } from 'components/ui/Container.styled';

export const App = () => (
  <Container>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <Contacts />
  </Container>
);
