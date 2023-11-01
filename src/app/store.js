import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../features/stockSlice';
import saleCartReducer from '../features/saleCartSlice';
import issueReducer from '../features/issuesSlice';

export const store = configureStore({
  reducer: {
    stock_items: stockReducer,
    saleCart: saleCartReducer,
    issues: issueReducer,
  },
});
