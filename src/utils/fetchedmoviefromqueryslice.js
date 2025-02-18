import { createSlice } from "@reduxjs/toolkit";

const fetchedmoviefromqueryslice = createSlice({
    name:"fetchedfromquery",
    initialState:{list:[]},
    reducers:{
        addfetchedquery :(state,action)=>{
            state.list=action.payload
        },
        removefetchedquery:(state)=>{
            state.list=null
        }
    }

})

export const {addfetchedquery,removefetchedquery}=fetchedmoviefromqueryslice.actions
export default fetchedmoviefromqueryslice.reducer