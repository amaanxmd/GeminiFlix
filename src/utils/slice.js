import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice(

    {
     name :"user",
     initialState:null,
     reducers:{
         adduser:(state,action)=>{
           state=action.payload
         },
        removeuser:(state,action)=>{
            state= null
        }
     }


    }



)

export const {adduser, removeuser}= slice.actions
export default slice.reducer