import { createSlice } from '@reduxjs/toolkit';

const stockItems = [
  'Issues',
  'Receipts',
  'Requisitions',
  'Stock take',
  'Stock adjustments',
  'Reports & Enquiries',
];

const initialState = {
  stock: stockItems,
  loading: false,
  visible: false,
};

const stockSlice = createSlice({
  name: 'stock_items',
  initialState,
  reducers: {
    toggleVisible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { toggleVisible } = stockSlice.actions;

export const selectStockMan = (state) => state.stock_items;

export default stockSlice.reducer;
