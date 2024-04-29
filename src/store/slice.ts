import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IContact } from "@/modules/interfaces";

const initialState: IContact[] = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<IContact>) => {
      state.push(payload);
    },
    removeContact: (state, { payload }: PayloadAction<string>) => {
      return state.filter((contact) => contact.id !== payload);
    },
    updateContact: (state, { payload }: PayloadAction<IContact>) => {
      const index = state.findIndex((contact) => contact.id === payload.id);
      if (index !== -1) {
        state[index] = payload;
      }
    },
  },
});

export const { addContact, removeContact, updateContact } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
