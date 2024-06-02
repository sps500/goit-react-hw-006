import { createSlice, createAction } from "@reduxjs/toolkit";

// Замість цього
// export const { addContact, deleteContact } = contactsSlice.actions;

// Створюємо екшени з createAction
export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    // Ми можемо використовувати ці екшени тут
    // addContact: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(
    //     (contact) => contact.id !== action.payload
    //   );
    // },

    // Використовуємо createAction
    [addContact]: (state, action) => {
      state.items.push(action.payload);
    },
    [deleteContact]: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
