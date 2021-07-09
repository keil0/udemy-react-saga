import entriesTypes from "../actions/entries.actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY:
      return state.concat({ ...action.payload });
    case entriesTypes.REMOVE_ENTRY:
      return state.filter((entry) => entry.id !== action.payload.id);
    case entriesTypes.POPULATE_ENTRY_DETAIL:
    case entriesTypes.UPDATE_ENTRY:
      const newEntries = [...state];
      const entryIndex = state.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[entryIndex] = {
        ...newEntries[entryIndex],
        ...action.payload.entry,
      };
      return newEntries;
    default:
      return state;
  }
};

export default reducer;
