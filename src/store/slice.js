import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
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
