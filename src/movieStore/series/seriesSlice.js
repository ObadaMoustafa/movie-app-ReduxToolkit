import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seriesList: [],
  selectedSeries: null,
};

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    addSeries: (state, { payload }) => {
      state.seriesList = payload;
    },
    deleteSeries: state => {
      state.seriesList = [];
    },
    selectASeries: (state, { payload }) => {
      state.selectedSeries = payload;
    },
    deleteSelectedSeries: state => {
      state.selectedSeries = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSeries, deleteSeries, selectASeries, deleteSelectedSeries } =
  seriesSlice.actions;

// access states
export const getAllSeries = state => state.series.seriesList;
export const getSelectedSeries = state => state.series.selectedSeries;

export default seriesSlice.reducer;
