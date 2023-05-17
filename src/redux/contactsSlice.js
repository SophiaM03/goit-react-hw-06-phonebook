import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContact, changeFilter } =
  contactsSlice.actions;
