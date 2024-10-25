import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice"
import movieReducer from "./movieslice"
import gptReducer from "./gptslice"
import fetchedMovieReducer from "./fetchedmoviefromqueryslice"
const store  = configureStore(

{
    reducer:{userReducer,movieReducer,gptReducer,fetchedMovieReducer}
}

)
export default store;