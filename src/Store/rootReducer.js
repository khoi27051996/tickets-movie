import { combineReducers } from "redux";
import { bookingMovieReducer } from "./BookingMovie/slice";

export const rootReducer = combineReducers({
    movieBooking : bookingMovieReducer
})