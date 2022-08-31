import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contactsApi';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
