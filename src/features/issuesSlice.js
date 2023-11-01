import { createSlice, nanoid } from '@reduxjs/toolkit';

const issueItems = [
  {
    id: nanoid(),
    item: 'Maize',
    quantity: 90,
    unitPrice: 34.55,
  },
  {
    id: nanoid(),
    item: 'Chemicals',
    quantity: 90,
    unitPrice: 34.55,
  },
  {
    id: nanoid(),
    item: 'Fuel',
    quantity: 90,
    unitPrice: 34.55,
  },
  {
    id: nanoid(),
    item: 'Feed',
    quantity: 90,
    unitPrice: 34.55,
  },
  {
    id: nanoid(),
    item: 'Soya',
    quantity: 90,
    unitPrice: 34.55,
  },
  {
    id: nanoid(),
    item: 'Groceries',
    quantity: 90,
    unitPrice: 34.55,
  },
  {
    id: nanoid(),
    item: 'Implements',
    quantity: 90,
    unitPrice: 34.55,
  },
];

const initialState = {
  issues: issueItems,
  amtOfItems: 0,
  totalItems: 0,
  loading: false,
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
});

export default issuesSlice.reducer;
//export const {} = issuesSlice.actions
export const issuesSelector = (state) => state.issues;
