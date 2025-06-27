import { createSelector } from "@reduxjs/toolkit";

const selectAllContacts = (state) => state.contacts.items;
const selectFindContact = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFindContact],
  (allContacts, findContact) => {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().startsWith(findContact.toLowerCase())
    );
  }
);
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
