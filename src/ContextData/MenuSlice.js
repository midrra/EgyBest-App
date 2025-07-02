import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu } = MenuSlice.actions;
export default MenuSlice.reducer;
