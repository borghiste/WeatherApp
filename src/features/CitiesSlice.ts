import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const Data = [];

export const CitiesSlice = createSlice({
    name:'cities',
    initialState: Data,
    reducers:{
        addCity:(state, action)=>{
          state.push(action.payload)
        }

        }
    })
export const {addCity}= CitiesSlice.actions



export default CitiesSlice.reducer