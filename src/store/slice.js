import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: initialContacts,
  filter: '',
};

const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    removeContacts(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    filterContacts(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

const persistConfig = {
  key: 'items',
  storage,
};

export default persistReducer(persistConfig, contacts.reducer);

export const { addContact, removeContacts, filterContacts } = contacts.actions;

// Selectors

export const getContsctsValue = state => state.contacts.contacts;

export const getFilterValue = state => state.contacts.filter;
