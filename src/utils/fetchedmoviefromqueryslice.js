import { createSlice } from "@reduxjs/toolkit";

const fetchedmoviefromqueryslice = createSlice({
    name:"fetchedfromquery",
    initialState:{list:null},
    reducers:{
        addfetchedquery :(state,action)=>{
            state.list=action.payload
        },
        removefetchedquery:(state)=>{
            state.list=null
        },
        handleErrorFromTmdb:(state)=>{
            state.list=[]
        }
    }

})

export const {addfetchedquery,removefetchedquery,handleErrorFromTmdb}=fetchedmoviefromqueryslice.actions
export default fetchedmoviefromqueryslice.reducer