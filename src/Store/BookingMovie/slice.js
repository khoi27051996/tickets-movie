import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chairBooking: [],
  chairBooked: [],
  total: 0,
};

const bookingMovieSlice = createSlice({
  name: "bookingMovie",
  initialState,
  reducers: {
    setChairBooking: (state, action) => {
      const index = state.chairBooking.findIndex(
        (v) => v.soGhe == action.payload.soGhe
      );
      if (index != -1) {
        state.chairBooking.splice(index, 1);
      } else {
        state.chairBooking.push(action.payload);
      }
    },
    setChairBooked: (state, action) => {
      state.total = 0;
      state.chairBooked = [...state.chairBooked, ...state.chairBooking];
      state.chairBooking.forEach((v) => {
        state.total = state.total + v.gia;
      });
      state.chairBooking = [];
    },
  },
});

export const { reducer: bookingMovieReducer, actions: bookingMovieAction } =
  bookingMovieSlice;
