import { createSlice, createAction } from "@reduxjs/toolkit";

// Замість цього
// export const { changeFilter } = filtersSlice.actions;

// Створюємо дію з createAction
export const changeFilter = createAction("filters/changeFilter");

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    // Ми можемо використовувати цю дію тут
    // changeFilter: (state, action) => {
    //   state.name = action.payload;
    // },

    // Використовуємо createAction
    [changeFilter]: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
