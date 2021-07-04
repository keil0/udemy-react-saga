const reducer = (state = initalEntries, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return state.concat({ ...action.payload });
    case "REMOVE_ENTRY":
      return state.filter((entry) => entry.id !== action.payload.id);
    case "UPDATE_ENTRY":
      const newEntries = [...state];
      const entryIndex = state.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[entryIndex] = { ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

const initalEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 2000.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.0,
    isExpense: true,
  },
];

export default reducer;
