import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { combineReducers, createSlice } from '@reduxjs/toolkit';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fb6cc0e4bcaf5351848689.mockapi.io/contacts',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: `/contacts`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: {
    filterContacts(state, action) {
      return { ...state, filterValue: action.payload };
    },
  },
});

export const { filterContacts } = filterSlice.actions;

// Selectors

export const getFilterValue = state => state.filter.filterValue;

// combineReducers

export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export default rootReducer;
