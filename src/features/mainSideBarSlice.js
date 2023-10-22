import { createSlice } from '@reduxjs/toolkit'
import StockManagement from '../Pages/StockManagement'

const initialState = {
  mainSideBarSlice: StockManagement,
  visible: true,
}

const mainSideBarSlice = createSlice({
  name: 'mainSideBar',
  initialState,
  reducers: {
    toggleVisible1: (state) => {
      state.visible = !state.visible
    },
  },
})

export const { toggleVisible1 } = mainSideBarSlice.actions

export const selectMainSideBar = (state) => state.mainSideBar

export default mainSideBarSlice.reducer
