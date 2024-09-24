import { configureStore } from "@reduxjs/toolkit";
import {CitiesSlice}  from '../features/CitiesSlice';

import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherApi } from '../features/weatherAPISlice';

 const store  = configureStore({
    reducer:{
        cities: CitiesSlice,
         [weatherApi.reducerPath]: weatherApi.reducer
    
    },

         middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
       
    },
   
)
setupListeners(store.dispatch)
export default store
