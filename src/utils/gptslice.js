import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name:"gpt",
    initialState:{
      toggle:false,
      startandend:{start:0,end:10},
      query:null

    },
    reducers:{
        togglegpt:(state)=>{
              state.toggle= !state.toggle
        },
        updatestartandend:(state,action)=>{
          state.startandend.start=action.payload.start;
          state.startandend.end =action.payload.end;
        },
        setquery:(state,action)=>{
          state.query=action.payload
        },
        deletequery:(state)=>{
          state.query=null
        }

    }
})

export const{togglegpt,updatestartandend,setquery,deletequery}= gptslice.actions
export default gptslice.reducer