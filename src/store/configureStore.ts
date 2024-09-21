import { configureStore } from "@reduxjs/toolkit";
import citiesSlice  from '../features/CitiesSlice';
import { weatherAPI } from "../features/weatherAPISlice";
import { setupListeners } from '@reduxjs/toolkit/query'

 const store  = configureStore({
    reducer:{
        cities: citiesSlice,
        [weatherAPI.reducerPath]: weatherAPI.reducer,
    },
    middleware: (getdefaultMiddleware)=>getdefaultMiddleware().concat(weatherAPI.middleware),
})
setupListeners(store.dispatch)
export default store
