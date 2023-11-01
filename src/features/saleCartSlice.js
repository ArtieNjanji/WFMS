import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  saleCart: [],
  amtOfItems: 0,
  totalItems: 0,
  loading: false,
}

const saleCartSlice = createSlice({
  name: 'saleCart',
  initialState,
  reducers: {
    addSaleCart: (state, action) => {
      state.saleCart = action.payload
    },
    addAmtOfItems: (state, action) => {
      state.amtOfItems = action.payload
    },
    addTotalItems: (state, action) => {
      state.totalItems = action.payload
    },
    addLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})


export const selectSaleCart = (state) => state.saleCart
export const { addSaleCart, addAmtOfItems, addTotalItems, addLoading } =
  saleCartSlice.actions
export default saleCartSlice.reducer
