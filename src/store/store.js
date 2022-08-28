import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../api/contactsApi';
import { filterSlice } from 'store/slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
